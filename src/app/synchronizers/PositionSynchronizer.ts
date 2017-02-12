import {Actor} from 'excalibur';
import {Locatable} from "../domain/characters/Locatable";


export class PositionSynchronizer {

    private locatable: Locatable;
    private actor: Actor;

    constructor(locatable: Locatable, actor: Actor) {
        this.locatable = locatable;
        this.actor = actor;

        this.syncActor();
    }

    syncActor(): void {
        this.actor.x = this.locatable.getPosition().x;
        this.actor.y = this.locatable.getPosition().y;
    }
}