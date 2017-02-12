import {Position} from "../domain/Position";
import {Actor} from 'excalibur';
import {Goblin} from "../domain/characters/Goblin";

export class GoblinActor extends Goblin {

    constructor(position: Position, health: number, actor: Actor) {
        super(position, health);

        actor.x = position.x;
        actor.y = position.y;
    }
}