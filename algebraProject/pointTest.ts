import { Point } from "./point";


let myPoint: Point = new Point(6, 12)
let myPoint1: Point = new Point(4, 8)
let myPoint2: Point = new Point(5, 10)

let array = [myPoint, myPoint1, myPoint2];

console.log(myPoint.toString());
console.log(myPoint.calculateDistance(myPoint1));

console.log(myPoint.calculateQuadrant());
console.log(myPoint.calculateNearest(array));
