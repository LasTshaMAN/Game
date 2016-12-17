import {Position} from "./Position";


export class Goblin {

    health: number;
    position: Position;
    sprite: Phaser.Sprite;

    constructor(health: number, sprite: Phaser.Sprite) {
        this.health = health;
        this.position = new Position(sprite.centerX, sprite.centerY);
        this.sprite = sprite;
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