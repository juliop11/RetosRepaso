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

    constructor(nombre: string, marca: string, modelo: string, colors: string, precio: number) {
        this.name = nombre;
        this.trademark = marca;
        this.model = modelo;
        this.color = colors;
        this.price = precio;
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
}