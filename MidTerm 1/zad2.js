// Напишете функција select која прима 2 аргументи: објект и низа.

// Низата треба да содржи имиња на клучеви кои треба да се селектираат од објектот.

// Да се врати објект кој ги содржи само тие вредности

// For example:

// Input	Result
// {"a":1,"b":2,"c":3}
// a, c
// { a: 1, c: 3 }

"use strict";

var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.question("", (p1) => {
  rl.question("", (p2) => {
    p2 = p2.split(", ");
    p1 = JSON.parse(p1);

    console.log(select(p1, p2));

    rl.close();
  });
});

// DO NOT CHANGE ABOVE THIS LINE

// Write your solution here!!!

function select(p1, p2) {
  let obj = {};
  for (let i = 0; i < p2.length; i++) {
    if (p1.hasOwnProperty(p2[i])) {
      obj[p2[i]] = p1[p2[i]];
    }
  }
  return obj;
}

