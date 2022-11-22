// Напишете функција extender која прима 2 објекти како аргументи.

// Функцијата треба да го прошири првиот објект со својствата на вториот објект.

"use strict";

var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.question("", (p1) => {
  rl.question("", (p2) => {
    p1 = JSON.parse(p1);
    p2 = JSON.parse(p2);

    extender(p1, p2);
    //console.log(extender(p1,p2))
    console.log(p1);

    rl.close();
  });
});

function extender(p1, p2) {
  for (let key in p2) {
    if (p1.hasOwnProperty(key)) {
      continue;
    }
    p1[key] = p2[key];
  }

  return p1;
}
