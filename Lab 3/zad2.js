// Напишете функција sort_by_num_calls која прима листа од функции и ги сортира (во растечки редослед) врз основа на тоа колку повици се потребни за секоја од функциите во листата да врати вредност која не е е функција.

// пример:

// const f1 = () => "hello"; // f1() ➞ "hello"
// const f2 = () => () => "AWD"; // f2()() ➞ "AWD"
// const f3 = () => () => () => "user"; // f3()()() ➞ "user"

// console.log(sort_by_num_calls( [ f2, f3, f1] ) );
// // Prints: [ [Function: f1], [Function: f2], [Function: f3] ]
// // Reasoning: [f2, f3, f1] ➞ [2, 3, 1] ➞ [1, 2, 3] ➞ [f1, f2, f3]

// забелешка:

// - доколку членот на низата не е функција, третирајте го како да има потреба од 0 повици.
// - секоја функција се повикува без аргументиEvery function will be called with empty parameters.
// - секоја функција треба да се повика барем еднаш
// - вредностите што ги враќаат функциите може да бидат броеви, булови променливи, стрингови, итн.

const sort_by_num_calls = (array) => {
  return array.sort((a, b) => {
    let aCalls = 0;
    let bCalls = 0;
    let aResult;
    let bResult;
    if (typeof a === "function") {
      aResult = a();
    }

    if (typeof b === "function") {
      bResult = b();
    }
    while (typeof aResult === "function") {
      aCalls++;
      aResult = aResult();
    }
    while (typeof bResult === "function") {
      bCalls++;
      bResult = bResult();
    }
    return aCalls - bCalls;
  });
};
