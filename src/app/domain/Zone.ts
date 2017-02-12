import {Goblin} from "./characters/Goblin";
import {getRandomNumber} from "../utils/RandomNumberGenerator";
import {Position} from "./Position";

export class Zone {

    radius: number;
    // spawnedGoblins: Goblin[];

    constructor(radius: number) {
        this.radius = radius;
    }

    spawnGoblin(): Goblin {
        let randomX = getRandomNumber(0, this.radius);
        let randomY = getRandomNumber(0, Math.sqrt(this.radius * this.radius - randomX * randomX));
        let randomPosition = new Position(randomX, randomY);
        let randomHealth = getRandomNumber(10, 100);

        return new Goblin(randomPosition, randomHealth);
    }
}