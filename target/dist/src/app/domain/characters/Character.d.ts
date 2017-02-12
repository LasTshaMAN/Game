import { Position } from "../Position";
import { Locatable } from "./Locatable";
import { Mortal } from "./Mortal";
export declare abstract class Character implements Locatable, Mortal {
    protected position: Position;
    private health;
    constructor(position: Position, health: number);
    getPosition(): Position;
    closeTo(another: Locatable): boolean;
    getHealth(): number;
    isAlive(): boolean;
    takeDamage(damage: number): void;
}
