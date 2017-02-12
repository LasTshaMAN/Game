import {Position} from "../Position";
import {Character} from "./Character";


export class Dragon extends Character {

    flyTo(anotherPosition: Position): void {
        this.position = anotherPosition;
    }
}