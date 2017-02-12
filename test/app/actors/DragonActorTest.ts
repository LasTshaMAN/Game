import {expect} from "chai";
import {Position} from "../../../src/app/domain/Position";
import {Actor} from 'excalibur';
import {DragonActor} from "../../../src/app/actors/DragonActor";


describe('DragonActor', () => {

    it("should init Actor's position when created", () => {
        let actor = new Actor();
        new DragonActor(new Position(3, 4), 10, actor);

        expect(actor.x).to.be.equal(3);
        expect(actor.y).to.be.equal(4);
    });

    it("should change Actor's position when flies to another position", () => {
        let actor = new Actor();
        let dragon = new DragonActor(new Position(3, 4), 10, actor);
        let anotherPosition = new Position(5, 10);

        dragon.flyTo(anotherPosition);

        expect(actor.x).to.be.equal(5);
        expect(actor.y).to.be.equal(10);
    });
});