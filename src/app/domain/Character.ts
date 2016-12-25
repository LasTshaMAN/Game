import {Position} from "./Position";
import {Locatable} from "./Locatable";
import {Mortal} from "./Mortal";


export abstract class Character implements Locatable, Mortal {

    protected position: Position;
    private health: number;

    constructor(position: Position, health: number) {
        this.position = position;
        this.health = health;
    }

    getPosition(): Position {
        return this.position;
    }

    closeTo(another: Locatable): boolean {
        return (Math.abs(this.position.x - another.getPosition().x) < 15)
            && (Math.abs(this.position.y - another.getPosition().y) < 15);
    }

    getHealth(): number {
        return this.health;
    }

    isAlive(): boolean {
        return this.health > 0;
    }

    takeDamage(damage: number): void {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }
}