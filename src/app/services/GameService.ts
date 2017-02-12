import {Injectable} from "@angular/core";
import {Engine, Actor, Color, LockedCamera} from 'excalibur';
import {DragonActor} from "../actors/DragonActor";
import {Position} from "../domain/Position";
import {getRandomNumber} from "../utils/RandomNumberGenerator";
import {GoblinActor} from "../actors/GoblinActor";


@Injectable()
export class GameService {

    startGame() {
        console.log("game is started");

        let game = new Engine({
            width: 800,
            height: 600
        });
        game.backgroundColor = Color.Gray;

        let dragonActor = new Actor();
        dragonActor.setWidth(50);
        dragonActor.setHeight(50);
        dragonActor.color = Color.Violet;

        let goblinActor = new Actor();
        goblinActor.setWidth(50);
        goblinActor.setHeight(50);
        goblinActor.color = Color.Red;

        game.currentScene.add(dragonActor);
        game.currentScene.add(goblinActor);

        game.currentScene.camera = new LockedCamera();
        game.currentScene.camera.setActorToFollow(dragonActor);

        let dragon = new DragonActor(new Position(0, 0), 100, dragonActor);
        let goblin = new GoblinActor(new Position(200, 200), 10, goblinActor);

        game.on('postupdate', () => {
            dragon.flyTo(new Position(getRandomNumber(0, 100), getRandomNumber(0, 100)))
        });

        game.start();
    }
}
