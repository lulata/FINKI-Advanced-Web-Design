// Напишете JavaScript функциjа наречена difference коjа ´ке ги наjде уникатните елементи од 2 полиња.

// Пример како треба да изгледа функцијата:

// console.log(difference([1, 2, 3], [100, 2, 1, 10])) ----> [ 1, 2, 3, 10, 100]

// function difference(a, b) {
//   var result = [];
//   // loop through a and b and find the unique elements
//   for (var i = 0; i < a.length; i++) {
//     // if (b.indexOf(a[i]) === -1) {
//     result.push(a[i]);
//     // }
//   }
//   for (var i = 0; i < b.length; i++) {
//     if (a.indexOf(b[i]) === -1) {
//       result.push(b[i]);
//     }
//   }

//   return result;
// }

function difference(a, b) {
  var result = [];
  for (const key in a) {
    result.push(a[key]);
  }

  for (const key in b) {
    result.push(b[key]);
  }
  //   result = result.flat();

  let flatten = (arr) => {
    return arr.reduce(
      (acc, val) =>
        Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
      []
    );
  };
  result = flatten(result);

  return result.filter((item, index) => result.indexOf(item) === index);
}

//add more code/functions if you need
