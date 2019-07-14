function romArab(str){
// El resultado será un número
    let result = 0;
// Declaración de dos arrays, uno con números árabes y otro con romanos
    const arabe = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    const romano = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    for (let i = 0; i <= arabe.length; i++) {

// Busca la posición con indexOf, str.indexOf(romano[i]) devuelve -1 sino coincide con romano, mientras devuelva 0
// sustituye con replace el string que corresponde de romano y se suma a result el valor de arabe que coincide con romano

console.log(i + " " + romano[i] + " " + str.indexOf(romano[i])+ " checking");

        while (str.indexOf(romano[i]) === 0) {
            
            console.log(i + " while");

            result += arabe[i];

            str = str.replace(romano[i], '');
            /* console.log(result + " " + str + " buclewhile"); */
        }
    }

    return result;

}

function arabRomano(num) {

    let result = '';

    const arabe = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    const romano = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for (let i = 0; i <= arabe.length; i++) {

        while (num % arabe[i] < num) {

            result += romano[i];

            num -= arabe[i];

        }

    }

    return result;
}

// De romano a árabe

console.log(romArab("LXXXVII"));
console.log(romArab("CXXIX"));
console.log(romArab("LIV"));
console.log(romArab("CXXX"));
console.log(romArab("CCXC"));
console.log(romArab("CCLXXXX"));
console.log(romArab("CMXCIX"));



// De árabe a romano

console.log(arabRomano(230));
console.log(arabRomano(1200));
console.log(arabRomano(1900));
console.log(arabRomano(87));
console.log(arabRomano(74));

// Validador de numeros romanos

let cadena = "IVII";
let regExp = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
let numeroValido = regExp.test(cadena);

if (numeroValido === true) {

    console.log("El numero romano es valido");
}
else {

    console.log("El numero romano no es valido");
}
