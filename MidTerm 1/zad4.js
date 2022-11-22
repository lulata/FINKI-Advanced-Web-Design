// Да се напише функција wait која прима друга функција f како параметар и овозможува да се почекаат аргументите кои треба да бидат пресметани од функцијата f. Функцијата f секогаш прима низа како прв аргумент.

// Функцијата wait треба да врати објект кој има 3 методи:

// add - кој додава нов аргумент кој треба да се пресмета
// remove - кој го трга аргументот кој треба да се пресмета од финалната пресметка
// calc - кој ја извршува функцијата f врз аргументите кои биле дотогаш додадени.
// For example:

// Test	Result
// let sum = (array)=> array.reduce((p,n)=>p+n, 0)

// let sum_wait = wait(sum)

// sum_wait.add(10)

// sum_wait.add(100)

// sum_wait.add(15)

// sum_wait.remove(10)

// console.log(sum_wait.calc())

function wait(f) {
  let arr = [];
  return {
    add: function (x) {
      arr.push(x);
    },
    remove: function (x) {
      arr = arr.filter((el) => el !== x);
    },
    calc: function () {
      return f(arr);
    },
  };
}
