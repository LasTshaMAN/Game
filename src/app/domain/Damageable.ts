import {Position} from "./Position";


export interface Damageable {

    getPosition(): Position;

    takeDamage(damage: number): void;
}