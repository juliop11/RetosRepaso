import { Point } from "./point";
import { Triangle } from "./triangle";

let vertex1 = new Point(5, 8);
let vertex2 = new Point(2, 6);
let vertex3 = new Point(3, 9);

let triangulo:Triangle = new Triangle (vertex1, vertex2, vertex3);

console.log(triangulo.calculateLengthSides());
