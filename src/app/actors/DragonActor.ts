import {Position} from "../domain/Position";
import {Dragon} from "../domain/characters/Dragon";
import {Actor} from 'excalibur';

export class DragonActor extends Dragon {

    actor: Actor;

    constructor(position: Position, health: number, actor: Actor) {
        super(position, health);

        this.actor = actor;
        this.actor.x = position.x;
        this.actor.y = position.y;
    }

    flyTo(anotherPosition: Position): void {
        super.flyTo(anotherPosition);

        this.actor.x = anotherPosition.x;
        this.actor.y = anotherPosition.y;
    }
}