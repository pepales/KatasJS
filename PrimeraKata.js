// Generamos un número aleatorio del 1 al 100
// Math.floor para redondear y random genera los numeros aleatorios entre un num
// máximo y un mínimo

let num = Math.floor(Math.random() * 100 + 1);

// Conversión de la variable num a cadena de texto

let textNum = num.toString();

// Declaración de la cadena que sustituye al número en los casos específicos

let str ="";


if (num % 3 == 0){

    str += "Foo";

}
if (textNum.charAt(0) == "3"){

    str += "Foo";
    

}
if (textNum.charAt(1) == "3"){

    str += "Foo";
    

}
if (num % 5 == 0){

    str += "Bar";

}
if (textNum.charAt(0) == "5"){

    str += "Bar";
    

}
if (textNum.charAt(1) == "5"){

    str += "Bar";
    

}
if (textNum.charAt(2) == "5"){

    str += "Bar";
    

}
if (num % 7 == 0){

    str += "Quix";

}
if (textNum.charAt(0) == "7"){

    str += "Quix";
    

}
if (textNum.charAt(1) == "7"){

    str += "Quix";
    

}

if (str.length > 0){

    console.log(num + " --> "+ str);

} else {

    console.log(num + " --> "+ num);

}