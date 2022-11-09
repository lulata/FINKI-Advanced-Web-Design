// Креирајте функција која ќе ги пресметува поените на еден фудбалски тим, така што вкупниот број на поени ќе претставува сума од сите резултати добиени на натпреварите, така што:
// победа: 3 поени
// нерешено: 1 поен
// пораз: 0 поени
// Пример како треба да изгледа функцијата, каде како аргументи  се  поставуваат бројот на победeни, нерешени и изгубени натпревари:
// footballPoints(3, 4, 2) ➞ 13

'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {

        p1 = p1.split(", ")
        console.log(footballPoints(Number(p1[0]),Number(p1[1]),Number(p1[2])))

        rl.close();

});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function footballPoints(p1,p2,p3) { // Write this function
    var result = 0;
    result = p1 * 3 + p2 * 1;
    return result;
}


