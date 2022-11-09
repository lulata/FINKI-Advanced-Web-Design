// Дадена е рубиковата коцка, таа има n линии кои ја делат секоја страна од коцката. Креирајте функција која како влез прима n - број на линии на една страна на коцката, а како излез го дава вкупниот број на квадрати од кои се состои рубиковата коцка.

// Пример како треба да изгледа функцијата:

// howManyStickers(1) ➞ 6
// howManyStickers(2) ➞ 24

// howManyStickers(3) ➞ 54

'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {
        p1 = Number(p1)

        console.log(howManyStickers(p1))

        rl.close();

});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function howManyStickers(p1) { // Write this function
    var result = 0;
    result = p1 * p1 * 6;
    return result;

}




