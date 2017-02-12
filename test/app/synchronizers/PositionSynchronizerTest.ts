import {expect} from "chai";
import {Position} from "../../../src/app/domain/Position";
import {Actor} from 'excalibur';
import {PositionSynchronizer} from "../../../src/app/synchronizers/PositionSynchronizer";


describe('PositionSynchronizer', () => {

    it("should synchronize Actor's position upon a construction", () => {
        let actor = new Actor();
        let locatable = {
            getPosition: () => {
                return new Position(3, 4);
            },
            closeTo: (): boolean => {
                return false;
            }
        };

        new PositionSynchronizer(locatable, actor);

        expect(actor.x).to.be.equal(3);
        expect(actor.y).to.be.equal(4);
    });

    it("should synchronize Actor's position properly", () => {
        let actor = new Actor();
        let position = new Position(3, 4);
        let locatable = {
            getPosition: () => {
                return position;
            },
            closeTo: (): boolean => {
                return false;
            }
        };
        let positionSynchronizer = new PositionSynchronizer(locatable, actor);
        position.x = 5;
        position.y = 10;

        positionSynchronizer.syncActor();

        expect(actor.x).to.be.equal(5);
        expect(actor.y).to.be.equal(10);
    });
});