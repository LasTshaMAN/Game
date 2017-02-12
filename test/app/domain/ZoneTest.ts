import {expect} from "chai";
import {Zone} from "../../../src/app/domain/Zone";
import {Position} from "../../../src/app/domain/Position";


describe('Zone', () => {

    it("should allow for spawning a Goblin with his position being within its radius", () => {
        let zoneRadius = 10;
        let zone = new Zone(zoneRadius);

        let goblin = zone.spawnGoblin();

        let distanceBetweenZoneCenterAndGoblin = goblin.getPosition().distanceTo(new Position(0, 0));
        expect(distanceBetweenZoneCenterAndGoblin).to.be.not.greaterThan(zoneRadius);
    });

    it("should not spawn Goblins during initialization", () => {
        let zone = new Zone(10);

        let actualAmountOfGoblins = zone.getAmountOfSpawnedGoblins();

        expect(actualAmountOfGoblins).to.be.equal(0);
    });

    it("should keep track of spawned Goblins", () => {
        let zone = new Zone(10);
        zone.spawnGoblin();
        zone.spawnGoblin();

        let actualAmountOfGoblins = zone.getAmountOfSpawnedGoblins();

        expect(actualAmountOfGoblins).to.be.equal(2);
    });

    it("should get rid of dead Goblins after zone was cleaned", () => {
        let zone = new Zone(10);
        zone.spawnGoblin();
        let goblin = zone.spawnGoblin();
        goblin.takeDamage(100);

        zone.removeDeadGoblins();

        let actualAmountOfGoblins = zone.getAmountOfSpawnedGoblins();
        expect(actualAmountOfGoblins).to.be.equal(1);
    });
});