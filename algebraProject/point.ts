// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:

// • x: number
// • y: number

// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.

// 4. Crear los métodos setters y getters para todos los atributos de la clase.

// 5. Crear un método toString() que convierta a texto las coordenadas del punto.
// Debe devolver: “(x,y)”

// 6. En otro fichero denominado pointTest.ts importar la clase Point.

// 7. Crear un nuevo objeto myPoint de la clase Point, en el fichero pointTest.ts, y probar todos sus
// métodos. Subir los cambios a GitHub.


export class Point {
    private x: number
    private y: number

    constructor(numerox: number, numeroy: number) {
        this.x = numerox;
        this.y = numeroy
    }
    public getX(): number {
        return this.x;
    }
    public setX(x: number): void {
        this.x = x;
    }
    public getY(): number {
        return this.y;
    }
    public setY(y: number): void {
        this.y = y;
    }

    public toString(): string {

        let convertir = String(this.x);
        let convertir1 = String(this.y);

        return `"(${convertir},${convertir1})"`;

    }
}

