import {Position} from "./Position";


export class Goblin {

    private health: number;
    private position: Position;

    constructor(health: number) {
        this.health = health;
        // this.position = new Position(sprite.centerX, sprite.centerY);
    }

    getPosition(): Position {
        return this.position;
    }

    takeDamage(damage: number): void {
        this.health -= damage;

        // Test
        console.log("Goblin got hit, health left = " + this.health);
    }
}