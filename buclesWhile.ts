// Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

// let array = [5, 9, 13, 16];

// function hasEven(myNums: number[]) {

//     let i: number = 0;
//     let esPar: boolean = false;

//     while (i < myNums.length && !esPar) {

//         if (myNums[i] % 2 == 0) {

//             esPar = true;
//         }
//         i++
//     }
//     return esPar;
// }
// console.log(hasEven(array));


// Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)

function startWithM(myNames: string[]) {

    let incluye: boolean = true;
    let i = 0;
    while (i < myNames.length && incluye == true) {

        if (myNames[i].charAt(0) != "M") {

            incluye = false;
        }
        i++
    }
    return incluye;
}
console.log(startWithM(["Manuel", "Maria", "Marta"]));
