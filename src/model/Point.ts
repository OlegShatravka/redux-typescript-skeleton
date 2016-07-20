export default class Point {
    
    constructor(private x: number, private y: number) {
        this.x = x;
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public setX(x:number): void {
        this.x = x;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public convert(): string {
        return `x = ${this.x} y = ${this.y}`;
    }

    public toString() {
        return this.convert();
    }

}