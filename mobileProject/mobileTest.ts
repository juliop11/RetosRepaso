import { Mobile } from "./mobile";

let movil: Mobile = new Mobile("Samsung", "Galaxy", "s21", "azul", 800);
let movil1: Mobile = new Mobile("Redmi", "Note", "9s", "negro", 200);
let movil2: Mobile = new Mobile("Xiaomi", "Mi", "12f", "verde", 300);

let myMobiles: Mobile[] = [movil, movil1, movil2]

console.log(movil.printPattern());
//console.log(movil);
//console.log(myMobiles);


