import {Position} from "./Position";


export interface Attackable {

    getPosition(): Position;

    takeDamage(damage: number): void;
}