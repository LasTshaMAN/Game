import { Position } from "../domain/Position";
import { Actor } from 'excalibur';
import { Goblin } from "../domain/characters/Goblin";
export declare class GoblinActor extends Goblin {
    constructor(position: Position, health: number, actor: Actor);
}
