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

        return Math.sqrt(this.getX() * this.getX()) + (this.getY() * this.getY())
    }

    public calculateDistance(anotherPoint: Point): number {

        let x = anotherPoint.getX() - this.getX()
        let y = anotherPoint.getY() - this.getY()

        return Math.sqrt(x * x + y * y)
    }
    public calculateQuadrant(): number {

        let resultado: number = 0;

        if ((this.getX() == 0) || (this.getY() == 0)) {

            resultado = 0;
        }
        else if ((this.getX() > 0) && (this.getY() > 0)) {

            resultado = 1;
        }
        else if ((this.getX() < 0) && (this.getY() > 0)) {

            resultado = 2;
        }
        else if ((this.getX() < 0) && (this.getY() < 0)) {

            resultado = 3;
        }
        else if ((this.getX() > 0) && (this.getY() < 0)) {

            resultado = 4;
        }

        return resultado;
    }
}






//RETO 2
// 1. Crear un método denominado distanceToOrigin():number que devuelva la distancia del
// punto al origen de coordenadas (0,0).
// NOTA: Buscar en Google la formula para calcular la distancia.

// 2. Crear un método denominado calculateDistance(anotherPoint:Point):number, que
// devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
// instancia de Punto que se recibe como parámetro denominada anotherPoint.
// NOTA: Buscar en Google la formula para calcular la distancia entre dos puntos.

// 3. Modificar el fichero pointTest.ts para probar los nuevos métodos

//RETO 3
// 1. Programa un método denominado calculateQuadrant():number que devuelva el
// cuadrante en el que se encuentra el punto.

// El prototipo del método se muestra a continuación:

// - Devuelve 0 si x o y son 0.

// - Devuelve 1 si está en el primer cuadrante (x e y positivos).

// - Devuelve 2 si está en el segundo cuadrante (x negativo e y positivo).

// - Devuelve 3 si está en el tercer cuadrante (x e y negativos).

// - Devuelve 4 si está en el cuarto cuadrante (x positivo e y negativo).

// 2. Modificar el fichero pointTest.ts para probar este nuevo método.