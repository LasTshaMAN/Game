import {Position} from "./Position";


export interface Mortal {

    isAlive(): boolean;

    getHealth(): number;

    takeDamage(damage: number): void;
}