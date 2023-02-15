import { Point } from "./point";

export class Triangle {
    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;
 
    constructor(vertice1: Point, vertice2: Point, vertice3: Point) {

        this.vertex1 = vertice1;
        this.vertex2 = vertice2;
        this.vertex3 = vertice3;
    }

    calculateLengthSides(): number[] {

        let array: number[] = [];

        array.push(this.vertex1.calculateDistance(this.vertex2));
        array.push(this.vertex2.calculateDistance(this.vertex3));
        array.push(this.vertex1.calculateDistance(this.vertex3));

        return array
    }
}