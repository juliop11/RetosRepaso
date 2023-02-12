// 1. Trabajar en la rama repaso2, crear una nueva carpeta denominada mobileProject y
// crear el fichero mobile.ts. Dicho fichero debe contener la clase Mobile con los siguientes
// atributos privados:

// • name: string
// • trademark: string
// • model: string
// • color: string
// • price: number

// 2. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.

// 3. Crear los métodos setters y getters para todos los atributos de la clase.

// 4. En otro fichero denominado mobileTest.ts importar la clase Mobile.

// 5. Crear un nuevo objeto myMobile de la clase Mobile, en el fichero mobileTest.ts, y probar
// todos sus métodos.

export class Mobile {

    private name: string
    private trademark: string
    private model: string
    private color: string
    private price: number

    constructor(Nombre: string, Marca: string, Modelo: string, Colors: string, Precio: number) {
        this.name = Nombre;
        this.trademark = Marca;
        this.model = Modelo;
        this.color = Colors;
        this.price = Precio;
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getTrademark(): string {
        return this.trademark
    }
    public setTrademark(trademark: string): void {
        this.trademark = trademark;
    }
    public getModel(): string {
        return this.model
    }
    public setModel(model: string): void {
        this.model = model;
    }
    public getColor(): string {
        return this.color
    }
    public setColor(color: string): void {
        this.color = color;
    }
    public getPrice(): number {
        return this.price
    }
    public setTitle(price: number): void {
        this.price = price;
    }

    imprimePatron() {

        console.log("The characteristics of the mobile name are:");

        return `· Nombre: ${this.name} \n · Marca: ${this.trademark} \n · Modelo: ${this.model} \n · Colors: ${this.color} \n · Precio: ${this.price}`;

    }
}





// Crear un nuevo método que imprima por consola todas las características de la clase
// siguiendo el siguiente patrón:

// “The characteristics of the mobile name are:”

// • Name: name
// • Trademark: tradeMark
// • model: model
// • Color: color
// • Price: price

// 2. Crear tres objetos de la clase Mobile en el fichero mobileTest.ts.

// 3. Crear un array denominado myMobiles en el fichero mobileTest.ts que tendrá los tres
// objetos creados en el punto 2.

// 4. Mostrar los datos de myMobiles invocando al método del punto 1.