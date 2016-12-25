import { Position } from "./Position";
import { Locatable } from "./Locatable";
import { Mortal } from "./Mortal";


export class Goblin implements Locatable, Mortal {

    private position: Position;
    private health: number;

    constructor(position: Position, health: number) {
        this.position = position;
        this.health = health;
    }

    getPosition(): Position {
        return this.position;
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