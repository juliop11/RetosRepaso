import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";

let movil: Mobile = new Mobile("Samsung", "Galaxy", "s21", "azul", 800);
let movil1: Mobile = new Mobile("Redmi", "Note", "9s", "negro", 200);
let movil2: Mobile = new Mobile("Xiaomi", "Mi", "12f", "verde", 300);
let movil3: Mobile = new Mobile("Iphon", "Apple", "8 plus", "blanco", 900);

let myMobiles: Mobile[] = [movil, movil1, movil2, movil3]

let myCollection: MobileCollection = new MobileCollection(myMobiles);

console.log(myCollection);

for (let i = 0; i < myMobiles.length; i++) {
    console.log(myMobiles[i].getPrice());
}

console.log("***SUMA TOTAL***");
console.log(myCollection.getTotalPriceCalculation());

console.log(myCollection.printCollection());
