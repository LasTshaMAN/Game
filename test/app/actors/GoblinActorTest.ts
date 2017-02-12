import {expect} from "chai";
import {Position} from "../../../src/app/domain/Position";
import {Actor} from 'excalibur';
import {GoblinActor} from "../../../src/app/actors/GoblinActor";


describe('GoblinActor', () => {

    it("should init Actor's position when created", () => {
        let actor = new Actor();
        new GoblinActor(new Position(3, 4), 10, actor);

        expect(actor.x).to.be.equal(3);
        expect(actor.y).to.be.equal(4);
    });
});