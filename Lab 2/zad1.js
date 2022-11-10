// Напишете JavaScript функциjа наречена flatten коjа за влезно поле, ´ке го измине полето (и сите вгнездени полиња, без разлика на длабочината) и ´ке го врати полето со сите елементи во него, без вгнездени полиња.

// Пример како треба да изгледа функцијата:

// console.log(flatten([1, [2], [3, [[4]]],[5,6]]))   ---->  [1, 2, 3, 4, 5, 6]

function flatten() {
    //// Write this function
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            result = result.concat(flatten.apply(null, arguments[i]));
        } else {
            result.push(arguments[i]);
        }
    }
    return result;
}