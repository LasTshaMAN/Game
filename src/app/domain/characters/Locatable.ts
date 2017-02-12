import {Position} from "../Position";


export interface Locatable {

    getPosition(): Position;

    closeTo(another: Locatable): boolean;
}