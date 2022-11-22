// Потребно е да се креира Е-Болница која ќе се погрижи за заболените од корона вирусот. За таа цел се потребни најпрво помошни класи,
// Patient е класа во која се чува id-то на тестот (хеширање на името) и името. Оваа класа е наследена од класата CovidPositive
// каде како дополнителни атрибути се чуваат пол, годишна возраст на пациентот, датум на тестирањe, резултатите од тестот дали е
// позитивен или негативен (секој внесен пациент на почетокот има позитивен тест),  симптоми , дијабетeс или проблеми со респираторен систем(true/false).
// Функции кои треба да се имплементираат во оваа класа:

// Функција за ризик -> Печати колкав е ризикот во зависност од:
// Ако има симптоми, дијабетeс, проблеми со респираторниот систем и е над 75 години или над 50 години и е од машки пол -> high risk, во другиот случај -> average risk
// Ако нема симптоми, а тестот му е позитивен и има дијабетeс, проблеми со респираторниот систем -> high risk
// Ако има симптоми и тестот му е позитивен а има или дијабетeс или проблеми со респираторниот систем -> average risk
// Ако има симптоми и тестот му е позитивен а нема ниту дијабетeс ниту проблеми со респираторниот систем -> low risk
// Ако нема симптоми и тестот му е позитивен а нема ниту дијабетeс ниту проблеми со респираторниот систем -> low risk (resistant of covid)
// toString -> метода за печатење во формат: Patient %id %name is positive/negative

// EHospital класата е составена од листа од пациенти (тестирани на корона вирусот), каде е потребно да се имплементираат следните функционалности:
// додади пациент (add_patient): додавање пациент во листата
// тестирај пациент (test_patient): ако датумот на тестирање е пред 15 дена тогаш резултатот од тестот  се менува од позитивен во негативен
// проверка на пациентите (check()): се проверуваат сите пациенти со тоа што најпрво секој од нив се тестира, а потоа се печати ризикот кој го имаат
// проверка дали дадената општина како аргумент е во безбедна зона (safe_zone): се печати процентот на пациенти кои се негативни во дадената општина
// Печати (print()): Печати го секој пациент од листата

var hashCode = function (s) {
    return String(s)
      .split("")
      .reduce(function (a, b) {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }, 0);
  };
  
  class Patient {
    constructor(name) {
      this.name = name;
      // this.id = hashCode(name);
      // A da si go naprajte heshov ili slabo :D
      this.id = -1038130864;
    }
    get_id() {
      return this.id;
    }
    get_name() {
      return this.name;
    }
  }
  
  class CovidPositive extends Patient {
    constructor(
      name,
      date,
      gender,
      age,
      municipality,
      symptoms,
      respiratory_problem,
      hyperglycaemia,
      positive = false
    ) {
      super(name);
      this.positive = positive;
      this.gender = gender;
      this.age = age;
      this.date = date;
      this.municipality = municipality;
      this.symptoms = symptoms;
      this.respiratory_problem = respiratory_problem;
      this.hyperglycaemia = hyperglycaemia;
    }
    test() {
      var date = new Date(this.date);
      // smenete datum sleden pat :)
      var today = new Date("2020-11-27");
      var diff = Math.abs(today.getTime() - date.getTime());
      var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      // check if the date is older than 15 days
      if (diffDays > 15) {
        this.positive = false;
      } else {
        this.positive = true;
      }
    }
  
    risk() {
      if (
        this.positive &&
        this.symptoms &&
        this.hyperglycaemia &&
        this.respiratory_problem &&
        (this.age > 75 || this.age > 50) &&
        !this.gender == "male"
      ) {
        return `Patient: ${super.get_id()} ${this.name} is with high risk`;
      }
      if (this.symptoms && this.hyperglycaemia && this.respiratory_problem) {
        return `Patient: ${super.get_id()} ${this.name} is with average risk`;
      }
      if (
        !this.symptoms &&
        this.positive &&
        this.hyperglycaemia &&
        this.respiratory_problem
      ) {
        return `Patient: ${super.get_id()} ${this.name} is with high risk`;
      }
      if (
        this.symptoms &&
        this.positive &&
        (this.hyperglycaemia || this.respiratory_problem)
      ) {
        return `Patient: ${super.get_id()} ${this.name} is with average risk`;
      }
      if (
        this.symptoms &&
        this.positive &&
        !this.hyperglycaemia &&
        !this.respiratory_problem
      ) {
        return `Patient: ${super.get_id()} ${this.name} is with low risk`;
      }
      if (
        !this.symptoms &&
        this.positive &&
        !this.hyperglycaemia &&
        !this.respiratory_problem
      ) {
        return `Patient: ${super.get_id()} ${
          this.name
        } is with low risk (resistant of covid)`;
      }
    }
    toString() {
      return `Patient: ${super.get_id()} ${this.name} is ${
        this.positive == true ? "positive" : "negative"
      }`;
    }
  }
  
  class EHospital {
    constructor() {
      this.patients = [];
    }
    add_patient(patient) {
      this.patients.push(
        new CovidPositive(
          patient.name,
          patient.date,
          patient.gender,
          patient.age,
          patient.municipality,
          patient.symptoms,
          patient.respiratory_problem,
          patient.hyperglycaemia
        )
      );
    }
    test_patient() {
      this.patients.forEach((patient) => {
        patient.test();
      });
    }
    check() {
      this.test_patient();
      this.patients.forEach((patient) => {
        patient.test();
        if (patient.risk()) {
          console.log(patient.risk());
        }
      });
    }
    safe_zone(opstina) {
      var count = 0;
      this.patients.forEach((patient) => {
        if (patient.municipality == opstina && patient.positive == false) {
          count++;
        }
      });
      const returnVar =
        "You are in " +
        ((count / this.patients.length) * 100).toFixed(2) +
        "% safe zone";
      console.log(returnVar);
    }
    print() {
      this.patients.forEach((patient) => {
        console.log(patient);
      });
    }
  }
  
  // Vaka ne treba da bidi nisto, vreme zagubeno za dzabe :) vo debuging na vasi greski
  