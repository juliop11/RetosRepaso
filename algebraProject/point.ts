
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

