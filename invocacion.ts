// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:

// • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// • [“Venezuela”, “Veneno”, “Voltaje”]

// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.

// También tendrás que importar dichos ficheros en el fichero actual.

import { add } from "./buclesFor";
import { isEven } from "./condicionales";

console.log(isEven(add(["Casa", "Coche", "Ciudad", "Cesta"])));
console.log(isEven(add(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"])));
console.log(isEven(add(["Venezuela", "Veneno", "Voltaje"])));
