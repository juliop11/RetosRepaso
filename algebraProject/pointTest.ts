import { Point } from "./point";


let myPoint: Point = new Point(6, 12)
let myPoint1: Point = new Point(40,-8)
let myPoint2: Point = new Point(5, 10)




console.log(myPoint.toString());
console.log(myPoint.calculateDistance(myPoint1));

console.log(myPoint.calculateQuadrant());

let array:Point[] = [myPoint, myPoint1, myPoint2];
let cero = new Point(0, 0);
console.log(cero.calculateNearest(array));
