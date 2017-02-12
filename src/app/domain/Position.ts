export class Position {

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distanceTo(another: Position): number {
        return Math.sqrt(
            (this.x - another.x) * (this.x - another.x) +
            (this.y - another.y) * (this.y - another.y)
        );
    }
}