import {expect} from "chai";
import {Zone} from "../../../src/app/domain/Zone";
import {Position} from "../../../src/app/domain/Position";


describe('Zone', () => {

    it("should allow for spawning a Goblin with his position being within zone radius", () => {
        let zoneRadius = 10;
        let zone = new Zone(zoneRadius);

        let goblin = zone.spawnGoblin();

        let distanceBetweenZoneCenterAndGoblin = goblin.getPosition().distanceTo(new Position(0, 0));
        expect(distanceBetweenZoneCenterAndGoblin).to.be.not.greaterThan(zoneRadius);
    });
});