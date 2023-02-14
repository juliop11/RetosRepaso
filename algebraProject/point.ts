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
        this.y = numeroy;
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

    public distanceToOrigin() {

        return Math.sqrt(this.getX())**2 + (this.getY()**2)
    }

    public calculateDistance(anotherPoint: Point):number {

        let x = anotherPoint.getX() - this.getX()
        let y = anotherPoint.getY() - this.getY()

       return Math.sqrt(x * x + y * y)
    }
}






// Calcula la distancia entre dos puntos de coordenadas conocidas.
// La fórmula final a despejar es:
// D² = (X₂-X₁)² + (Y₂-Y₁)²
// Donde:
// (D) La distancia entre dos puntos.


// 1. Crear un método denominado distanceToOrigin():number que devuelva la distancia del
// punto al origen de coordenadas (0,0).
// NOTA: Buscar en Google la formula para calcular la distancia.

// 2. Crear un método denominado calculateDistance(anotherPoint:Point):number, que
// devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
// instancia de Punto que se recibe como parámetro denominada anotherPoint.
// NOTA: Buscar en Google la formula para calcular la distancia entre dos puntos.

// 3. Modificar el fichero pointTest.ts para probar los nuevos métodos