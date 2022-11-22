// Потребно е да се креира Air Pollution онлајн алатка, која ќе одредува колку дадената област е еко т.е не е загадена. За тоа најпрво е потребна помошна класа ObjFilters, која ќе ги содржи id-то на објектот (со хеширање на името), име на објект и  дали има или нема поставено филтри за издувните гасови (на почетокот не се поставени филтрите - false). Оваа класа е наследувана од класата PollutionObject во која како информации се чуваат датумот на изградба и општината во која се наоѓа објектот воедно како важни загадувачи на воздухот се земаат следниве метрики: PM10, NO2, SO2, O3, температура за нив се чува информација (true/false) во зависност од тоа дали објектот при производство создава издувни гасови во кои има појава на некоја од наведените метрики. Функции кои треба да се имплементираат во оваа класа:

// Функција за ризик -> Печати колкав е ризикот за овој објект да го загадува воздухот во зависност од:

// Ако има појава на PM10, NO2, SO2, O3 и температурата е помала од 10 степени -> high risk
// Ако има појава на PM10, NO2, SO2, O3 и температурата е поголема од 10 степени -> аverage risk
// Ако има појава на NO2, SO2, O3 -> аverage risk
// Ако има појава на PM10, NO2, O3 -> аverage risk
// Ако има појава на SO2, O3 или има појава на PM10, NO2 и температурата е поголема од 10 степени -> low risk
// Ако нема појава на ниту една метрика ->low risk (eco friendly)
// toString -> метода за печатење во формат: Object %id %name has/hasn't got  filters
// AirPollution класата е составена од листа од објекти, каде е потребно да се имплементираат следните функционалности:

// додади објект (add_object): додавање објект во листата
// тестирај објект (test_object): секој објект има рок од три месеци да инсталира филтри, па ако датумот на изградба бил пред повеќе од три месеци тогаш филтрите се сигурно додадени
// проверка на објектите (check()): се проверуваат сите објекти со тоа што најпрво секој од нив се тестира, а потоа се печати ризикот кој го имаат
// проверка дали дадената општина како аргумент е во безбедна зона (safe_zone): се печати процентот на објекти со филтри во дадента општина
// печати (print()): се печати секој објект од листата

var hashCode = function (s) {
  return String(s)
    .split("")
    .reduce(function (a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
};

class ObjFilters {
  constructor(name) {
    this.name = name;
    // this.id = hashCode(name);
    this.id = -1038130864;
    this.filters = false;
  }
  get_id() {
    return this.id;
  }
}

class PollutionObject extends ObjFilters {
  constructor(name, date, municipality, temperature, PM10, NO2, O3, SO2) {
    super(name);
    this.date = date;
    this.temperature = temperature;
    this.municipality = municipality;
    this.PM10 = PM10;
    this.NO2 = NO2;
    this.O3 = O3;
    this.SO2 = SO2;
  }
  risk() {
    let basicString = `The object  ${this.id} ${this.name} pollutes the air at `;
    if (this.PM10 && this.NO2 && this.SO2 && this.O3 && this.temperature < 10) {
      basicString += "high risk";
    } else if (
      this.PM10 &&
      this.NO2 &&
      this.SO2 &&
      this.O3 &&
      this.temperature > 10
    ) {
      basicString += "average risk";
    } else if (this.NO2 && this.SO2 && this.O3) {
      basicString += "average risk";
    } else if (this.PM10 && this.NO2 && this.O3) {
      basicString += "average risk";
    } else if (
      (this.SO2 && this.O3) ||
      (this.PM10 && this.NO2 && this.temperature > 10)
    ) {
      basicString += "low risk";
    } else {
      basicString += "low risk (eco friendly)";
    }
    return basicString;
  }
  test() {
    let date = new Date("2020-11-27");
    let date2 = new Date(this.date);
    let diff = date - date2;
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays > 90) {
      this.filters = true;
    }
  }
  toString() {
    return `Object ${this.id} ${this.name} ${
      this.filters ? "has" : "hasn't"
    } got filters`;
  }
}

class AirPollution {
  constructor() {
    this.objects = [];
  }
  add_object(object) {
    this.objects.push(object);
  }

  test_object(object) {
    object.test();
  }
  check() {
    this.objects.forEach((object) => {
      this.test_object(object);
      console.log(object.risk());
    });
  }
  print() {
    this.objects.forEach((object) => {
      console.log(object);
    });
  }
  safe_zone(municipality) {
    let counter = 0;
    this.objects.forEach((object) => {
      if (object.municipality === municipality && object.filters) {
        counter++;
      }
    });
    const returnVar =
      "You are in " +
      ((counter / this.objects.length) * 100).toFixed(2) +
      "% safe zone";
    console.log(returnVar);
  }
}
