import {Position} from "./Position";
import {Damageable} from "./Damageable";
import {getRandomNumber} from "./RandomNumberGenerator";


export class Dragon {

    private static MOVEMENT_LENGTH = 20;

    private attackPower: number;
    private position: Position;

    private lastTimeAttackedMs: number;

    constructor(attackPower: number) {
        this.attackPower = attackPower;
        // this.position = new Position(sprite.centerX, sprite.centerY);
        // this.sprite = sprite;
        this.lastTimeAttackedMs = 0;
    }

    attackIsOnCooldown(): boolean {
        return (Date.now() - this.lastTimeAttackedMs) < 1000;
    }

    isNearbyWith(target: Damageable): boolean {
        let targetPosition = target.getPosition();
        return this.position.closeTo(targetPosition);
    }

    attack(target: Damageable): void {
        target.takeDamage(this.attackPower);
        this.lastTimeAttackedMs = Date.now();
    }

    flyRandomly(): void {
        switch (getRandomNumber(1, 4)) {
            case 1:
                this.moveUp();
                break;
            case 2:
                this.moveRight();
                break;
            case 3:
                this.moveDown();
                break;
            case 4:
                this.moveLeft();
                break;
        }
    }

    private moveUp(): void {
        // this.sprite.centerY += Dragon.MOVEMENT_LENGTH;
        this.position.y += Dragon.MOVEMENT_LENGTH;
    }

    private moveRight(): void {
        // this.sprite.centerX += Dragon.MOVEMENT_LENGTH;
        this.position.x += Dragon.MOVEMENT_LENGTH;
    }

    private moveDown(): void {
        // this.sprite.centerY -= Dragon.MOVEMENT_LENGTH;
        this.position.y -= Dragon.MOVEMENT_LENGTH;
    }

    private moveLeft(): void {
        // this.sprite.centerX -= Dragon.MOVEMENT_LENGTH;
        this.position.x -= Dragon.MOVEMENT_LENGTH;
    }
}