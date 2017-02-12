import {expect} from "chai";
import {Position} from "../../../src/app/domain/Position";


describe('Position', () => {

    it('should have a retrievable x coordinate', () => {
        let position = new Position(3, 4);

        expect(position.x).to.be.equal(3);
    });

    it('should have a retrievable y coordinate', () => {
        let position = new Position(3, 4);

        expect(position.y).to.be.equal(4);
    });

    it('should allow for calculating Euclidean distance to another position', () => {
        let position = new Position(3, 4);

        let actualDistance = position.distanceTo(new Position(0, 0));

        expect(actualDistance).to.be.equal(5.0);
    });

    it('should have zero distance to the position with the same coordinates', () => {
        let position = new Position(3, 4);

        let actualDistance = position.distanceTo(new Position(3, 4));

        expect(actualDistance).to.be.equal(0.0);
    });
});