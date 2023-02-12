//Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.

//La fecha de nacimiento vendrá indicada por dos números: dia y mes.
//La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)


function zodiac(day, month) {


    if (day >= 20 && month == "enero" || day <= 18 && month == "febrero") {

        console.log("Acuario");
    }
    else if (day >= 19 && month == "febrero" || day <= 20 && month == "marzo") {

        console.log("Piscis");
    }
    else if (day >= 22 && month == "diciembre" || day <= 19 && month == "enero") {

        console.log("Capricornio");
    }
    else if (day >= 22 && month == "noviembre" || day <= 21 && month == "diciembre") {

        console.log("Sagitario");
    }
    else if (day >= 23 && month == "octubre" || day <= 21 && month == "noviembre") {

        console.log("Escorpio");
    }
    else if (day >= 23 && month == "septiembre" || day <= 22 && month == "octubre") {

        console.log("Libra");
    }
    else if (day >= 23 && month == "agosto" || day <= 22 && month == "septiembre") {

        console.log("Virgo");
    }
    else if (day >= 23 && month == "julio" || day <= 22 && month == "agosto") {

        console.log("Leo");
    }
    else if (day >= 21 && month == "junio" || day <= 22 && month == "julio") {

        console.log("Cancer");
    }
    else if (day >= 21 && month == "mayo" || day <= 20 && month == "junio") {

        console.log("Geminis");
    }
    else if (day >= 20 && month == "abril" || day <= 20 && month == "mayo") {

        console.log("Tauro");
    }
    else if (day >= 21 && month == "marzo" || day <= 19 && month == "abril") {

        console.log("Aries");
    }
}

//console.log(zodiac(26, "enero"));

// Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)


function continent(country: string) {

    if (country == "españa" || country == "francia" || country == "italia" || country == "alemania" || country == "portugal") {

        console.log("Europa");
    }
    else if (country == "marruecos" || country == "nigeria" || country == "kenia" || country == "mali" || country == "senegal") {

        console.log("Africa");
    }
    else if (country == "japon" || country == "china" || country == "indonesia" || country == "india" || country == "vietnan") {

        console.log("Asia");
    }
    else if (country == "eeuu" || country == "mexico" || country == "canada" || country == "brasil" || country == "colombia") {

        console.log("America");
    }
    else if (country == "australia" || country == "nueva zelanda" || country == "fiyi" || country == "tonga" || country == "samoa") {

        console.log("Oceania");
    }
}
// console.log(continent("senegal"));

// Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el numero introducido como parámetro de entrada es par
// - “El numero es impar”, si el numero introducido como parámetro de entrada es impar


export function isEven(numero1: number) {

    if (numero1 % 2 == 0) {

        console.log("El numero " + numero1 + " es par.");
    }
    else {
        console.log("El numero " + numero1 + " es impar.")
    }

}
// console.log(isEven(13));


