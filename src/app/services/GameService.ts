import {Injectable} from "@angular/core";
import {Engine, Actor, Color, LockedCamera} from 'excalibur';
import {PositionSynchronizer} from "../synchronizers/PositionSynchronizer";
import {Position} from "../domain/Position";
import {Zone} from "../domain/Zone";
import {Dragon} from "../domain/characters/Dragon";


@Injectable()
export class GameService {

    private game: Engine;

    startGame() {
        console.log("game is started");

        this.createGame();

        let dragon = new Dragon(new Position(0, 0), 100);
        let dragonActor = this.createActor(50, Color.Violet);
        let dragonPositionSynchronizer = new PositionSynchronizer(dragon, dragonActor);

        this.lockCameraOn(dragonActor);

        let zone = new Zone(500);

        const totalAmountOfGoblins = 10;
        for (let i = 0; i < totalAmountOfGoblins; i++) {
            let goblin = zone.spawnGoblin();
            let goblinActor = this.createActor(40, Color.Red);
            let goblinPositionSynchronizer = new PositionSynchronizer(goblin, goblinActor);
        }

        this.game.on('postupdate', () => {


            // dragon.flyTo(new Position(getRandomNumber(0, 100), getRandomNumber(0, 100)));
        });

        this.game.start();
    }

    private createGame() {
        this.game = new Engine({
            width: 800,
            height: 600
        });
        this.game.backgroundColor = Color.Gray;
    }

    private createActor(size: number, color: Color): Actor {
        let actor = new Actor();
        actor.setWidth(size);
        actor.setHeight(size);
        actor.color = color;

        this.game.currentScene.add(actor);

        return actor;
    }

    private lockCameraOn(actor: Actor) {
        this.game.currentScene.camera = new LockedCamera();
        this.game.currentScene.camera.setActorToFollow(actor);
    }
}
