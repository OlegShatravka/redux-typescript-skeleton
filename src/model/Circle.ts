export class Point {
    public constructor(protected x: number, protected y: number) {
    }
    public toString() {
        return `${this.x} ${this.y}`;
    }
}

export default class Circle extends Point {

    public constructor(protected x: number, protected y: number, protected radius: number) {
        super(x, y);
    }

    public toString() {
        return `${super.toString()} ${this.radius}`;
    }
}