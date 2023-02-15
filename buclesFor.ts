// Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

// function evenNumbers(num: number) {

//     for (let i = 0; i <= num; i++) {

//         if (i % 2 == 1) {

//             console.log(i);
//         }
//     }
// }
// evenNumbers(10);


// Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)  


// function myRevert(myArr: number[]) {

//     let array:number[] = [];

//     for (let i = myArr.length - 1; i >= 0; i--) {

//         array.push( myArr[i]);
//     }
//     return array;
// }
// console.log(myRevert([1, 2, 3, 4, 5]));

// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)

// let colors1 = ["Verde", "Rosa", "Rojo", "Negro"];
// let arcoiris = ["Rojo", "Naranja", "Amarillo", "Verde", "Anyil", "Azul", "Violeta"];

// function isRainbow(colors: string[]) {

//     for (let i = 0; i < colors.length; i++) {

//         if (arcoiris.indexOf(colors[i]) != - 1) {

//             console.log(colors[i] + " esta en la lista de colores del arcoiris.");
//         }
//         else {
//             console.log(colors[i] + " no esta en la lista de colores del arcoiris.");
//         }
//     }
// }
// isRainbow(colors1);


// Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

let array = ["sumando", "letras"];

export function add(myWords: string[]) {

    let suma: number = 0;

    for (let i = 0; i < myWords.length; i++) {

           suma += myWords[i].length;   
    }
    return suma;
}
console.log(add(array));
