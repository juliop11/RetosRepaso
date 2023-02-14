import { Point } from "./point";


let myPoint: Point = new Point(6, 12)
let myPoint1: Point = new Point(4, 8)

console.log(myPoint.toString());
console.log(myPoint.calculateDistance(myPoint1));

