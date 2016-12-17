import {Injectable} from "@angular/core";
import * as Phaser from "phaser";
import Sprite = Phaser.Sprite;
import {Dragon} from "./Dragon";
import {Goblin} from "./Goblin";
import {getRandomNumber} from "./RandomNumberGenerator";


@Injectable()
export class GameService {

    private static MAX_FIELD_COORDINATE_X = 1280;
    private static MAX_FIELD_COORDINATE_Y = 720;

    game: Phaser.Game;

    dragon: Dragon;
    goblins: Goblin[];

    startGame() {
        console.log("game is started");

        this.game = new Phaser.Game(GameService.MAX_FIELD_COORDINATE_X, GameService.MAX_FIELD_COORDINATE_Y, Phaser.AUTO, "game", {

            preload: () => {
                this.game.load.image('dragon', './assets/dragon.png');
                this.game.load.image('goblin', './assets/goblin.jpg');
            },

            create: () => {
                let dragonSprite = this.game.add.sprite(200, 200, 'dragon');
                this.dragon = new Dragon(5, dragonSprite);

                this.goblins = [];
                for (let i = 0; i < 5; ++i) {
                    this.goblins.push(this.createGoblinRandomly());
                }
            },

            update: () => {
                if (!this.dragon.attackIsOnCooldown()) {
                    this.attackNearbyGoblins();
                }
                this.dragon.flyRandomly();
            }
        });
    }

    private createGoblinRandomly(): Goblin {
        let goblinXPosition = getRandomNumber(0, GameService.MAX_FIELD_COORDINATE_X);
        let goblinYPosition = getRandomNumber(0, GameService.MAX_FIELD_COORDINATE_Y);
        let goblinSprite = this.game.add.sprite(goblinXPosition, goblinYPosition, 'goblin');
        return new Goblin(100, goblinSprite);
    }

    private attackNearbyGoblins(): void {
        for (let goblin of this.goblins) {
            if (this.dragon.isNearbyWith(goblin)) {
                this.dragon.attack(goblin);
            }
        }
    }
}
