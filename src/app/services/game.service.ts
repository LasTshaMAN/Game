import {Injectable} from "@angular/core";
import * as Phaser from "phaser";


@Injectable()
export class GameService {

    startGame() {
        console.log("game is started");

        var game = new Phaser.Game(1280, 720, Phaser.AUTO);
    }
}
