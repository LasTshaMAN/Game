import { Position } from "../domain/Position";
import { Dragon } from "../domain/characters/Dragon";
import { Actor } from 'excalibur';
export declare class DragonActor extends Dragon {
    actor: Actor;
    constructor(position: Position, health: number, actor: Actor);
    flyTo(anotherPosition: Position): void;
}
