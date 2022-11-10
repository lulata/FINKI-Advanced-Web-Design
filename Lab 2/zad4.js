// Напишете функција која ќе врши форматирање на даден датум со помош на currying функционалноста во JavaScript.

// Пример како треба да изгледа функцијата:
// console.log(date(1)(12)(2020)) ---> 1.12.2020
// console.log(date(1,12)(2020)) ---> 1.12.2020
// console.log(date(1)(12, 2020)) ---> 1.12.2020
// console.log(date(1,12, 2020)) ---> 1.12.2020

function curry(func) {
  //// Write this function
  //   return (a) => {
  //     return (b) => {
  //       return (c) => {
  //         return func(a, b, c);
  //       };
  //     };
  //   };
  //   return (a) => (b) => (c) => func(a, b, c);
  return (...args) => {
    if (args.length >= func.length) {
      return func(...args);
    }
    return curry(func.bind(null, ...args));
  };
}

function format_date(a, b, c) {
  //// Write this function
  return a + "." + b + "." + c;
}

var date = curry(format_date);
