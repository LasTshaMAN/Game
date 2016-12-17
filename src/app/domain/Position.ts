export class Position {

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    closeTo(anotherPosition: Position): boolean {
        return (Math.abs(this.x - anotherPosition.x) < 15) && (Math.abs(this.y - anotherPosition.y) < 15);
    }
}