import {Position} from "./Position";
import {Character} from "./Character";


export class Dragon extends Character {

    moveTo(anotherPosition: Position): void {
        this.position = anotherPosition;
    }
}