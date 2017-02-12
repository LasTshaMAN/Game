import {Position} from "../Position";
import {Character} from "./Character";


export class Dragon extends Character {

    private flewLastTimeMs: number;

    flyTo(anotherPosition: Position): void {
        if (!this.outOfBreath()) {
            this.position = anotherPosition;
            this.flewLastTimeMs = new Date().getTime();
        }
    }

    private outOfBreath(): boolean {
        return (new Date().getTime() - this.flewLastTimeMs) < 1000;
    }
}