import {Goblin} from "./characters/Goblin";
import {getRandomNumber} from "../utils/RandomNumberGenerator";
import {Position} from "./Position";


export class Zone {

    private radius: number;
    private spawnedGoblins: Set<Goblin>;

    constructor(radius: number) {
        this.radius = radius;
        this.spawnedGoblins = new Set();
    }

    getAmountOfSpawnedGoblins(): number {
        return this.spawnedGoblins.size;
    }

    spawnGoblin(): Goblin {
        let randomX = getRandomNumber(0, this.radius);
        let randomY = getRandomNumber(0, Math.sqrt(this.radius * this.radius - randomX * randomX));
        let randomPosition = new Position(randomX, randomY);
        let randomHealth = getRandomNumber(10, 100);

        let spawnedGoblin = new Goblin(randomPosition, randomHealth);

        this.spawnedGoblins.add(spawnedGoblin);

        return spawnedGoblin;
    }

    removeDeadGoblins() {
        this.spawnedGoblins.forEach((spawnedGoblin) => {
            if (!spawnedGoblin.isAlive()) {
                this.spawnedGoblins.delete(spawnedGoblin);
            }
        });
    }
}