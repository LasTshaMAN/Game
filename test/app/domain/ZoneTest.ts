import {expect} from "chai";
import {Zone} from "../../../src/app/domain/Zone";
import {Position} from "../../../src/app/domain/Position";


describe('Zone', () => {

    it("should allow for spawning a Goblin with his position being within its radius", () => {
        let zoneRadius = 100;
        let zone = new Zone(zoneRadius);

        let goblin = zone.spawnGoblin();

        let distanceBetweenZoneCenterAndGoblin = goblin.getPosition().distanceTo(new Position(0, 0));
        expect(distanceBetweenZoneCenterAndGoblin).to.be.not.greaterThan(zoneRadius);
    });

    it("should not spawn Goblins during initialization", () => {
        let zone = new Zone(100);

        let actualAmountOfGoblins = zone.getAmountOfSpawnedGoblins();

        expect(actualAmountOfGoblins).to.be.equal(0);
    });

    it("should keep track of spawned Goblins", () => {
        let zone = new Zone(100);
        zone.spawnGoblin();
        zone.spawnGoblin();

        let actualAmountOfGoblins = zone.getAmountOfSpawnedGoblins();

        expect(actualAmountOfGoblins).to.be.equal(2);
    });

    it("should get rid of dead Goblins after zone was cleaned", () => {
        let zone = new Zone(100);
        zone.spawnGoblin();
        let goblin = zone.spawnGoblin();
        goblin.takeDamage(100);

        zone.removeDeadGoblins();

        let actualAmountOfGoblins = zone.getAmountOfSpawnedGoblins();
        expect(actualAmountOfGoblins).to.be.equal(1);
    });

    it("should return a list of Goblins close to a given position", () => {
        let zone = new Zone(1000);
        let closeGoblin = zone.spawnGoblin();
        closeGoblin.getPosition().x = 0;
        closeGoblin.getPosition().y = 0;
        let distantGoblin = zone.spawnGoblin();
        distantGoblin.getPosition().x = 500;
        distantGoblin.getPosition().y = 500;

        let closeGoblins = zone.getGoblinsCloseTo(new Position(0, 0));

        expect(Array.from(closeGoblins)).to.contain(closeGoblin);
        expect(Array.from(closeGoblins)).to.not.contain(distantGoblin);
    });
});