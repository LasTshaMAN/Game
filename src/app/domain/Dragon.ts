import {Position} from "./Position";
import { Locatable } from "./Locatable";


export class Dragon implements Locatable {

    private position: Position;

    constructor(position: Position) {
        this.position = position;
    }

    getPosition(): Position {
        return this.position;
    }
}