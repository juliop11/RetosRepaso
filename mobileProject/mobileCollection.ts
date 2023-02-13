// 2. Dicho fichero debe contener la clase MobileCollection con los siguientes atributos privados:



// • mobiles: Mobile[]
// • totalPrice: number

// 3. El constructor debe tener como parámetro de entrada el array de objetos de la clase Mobile.

// 4. Crear los métodos setters y getters para todos los atributos de la clase.

// 5. En otro fichero denominado mobileCollectionTest.ts importar la clase MobileCollection.

// 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.

// 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado
// previamente y comprobar todos sus métodos.
import { Mobile } from "./mobile"

export class MobileCollection {

    private mobiles: Mobile[]
    private totalPrice: number
    private totalPriceCalculation: number

    constructor(Mobiles: Mobile[]) {

        this.mobiles = Mobiles;
        this.totalPrice;
        this.totalPriceCalculation;
    }

    public getMobiles(): Mobile[] {
        return this.mobiles;
    }
    public setMobiles(mobiles: Mobile[]): void {
        this.mobiles = mobiles;
    }
    public getTotalPrice(): number {
        return this.totalPrice;
    }
    public setTotalPrice(totalPrice: number): void {
        this.totalPrice = this.totalPrice;
    }
    public getTotalPriceCalculation(): number {

        let suma = 0;
        for (let i = 0; i < this.mobiles.length; i++){

            suma += this.mobiles[i].getPrice();
        }
            return suma;
    }
    public setTotalPriceCalculation(totalPriceCalculation: number): void {
        this.totalPriceCalculation = this.totalPriceCalculation;
    }
    printCollection(){

        for(let movil of this.mobiles){

           console.log(movil.imprimePatron());
        }
        console.log("Price overall: " + this.getTotalPriceCalculation());
    }
}




// 1. Crear un método privado denominado totalPriceCalculation sin parámetros de entrada,
// que te calcule el precio total de la colección.

// NOTA: Debe realizar la suma de los precios de todos los objetos almacenados en el
// atributo mobiles.

// 2. En el constructor llamar totalPriceCalculation y guardarlo en su atributo correspondiente.

// 3. Probar de nuevo el método getPrice de la clase en el fichero mobileCollectionTest.ts

