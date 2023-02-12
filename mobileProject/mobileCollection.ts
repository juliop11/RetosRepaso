// 2. Dicho fichero debe contener la clase MobileCollection con los siguientes atributos privados:

import { Mobile } from "./mobile"

// • mobiles: Mobile[]
// • totalPrice: number

// 3. El constructor debe tener como parámetro de entrada el array de objetos de la clase Mobile.

// 4. Crear los métodos setters y getters para todos los atributos de la clase.

// 5. En otro fichero denominado mobileCollectionTest.ts importar la clase MobileCollection.

// 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.

// 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado
// previamente y comprobar todos sus métodos.

export class MobileCollection {

    private mobiles: Mobile[]
    private totalPrice: number

    constructor(Mobiles: Mobile[]) {

        this.mobiles = Mobiles;
        this.totalPrice;
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
    
}