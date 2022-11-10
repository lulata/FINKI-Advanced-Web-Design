// Напишете функциjа коjа го враќа следниот фибоначиев броj за секоj повик:

// fib_next() ---> returns 1
// fib_next() ---> returns 2
// fib_next() ---> returns 3
// fib_next() ---> returns 5
// fib_next() ---> returns 8

// TODO: write the function;
// var fib_next = function () {
//   let a = 1;
//   return function () {
//     let b = a * a;
//     a = a + 1;
//     return b;
//   };
// };

var fib_next = (() => {
  let a = 1;
  let b = 1;
  return () => {
    let temp = a;
    a = b;
    b = temp + b;

    return a;
  };
})();
console.log(fib_next()); // returns 1
