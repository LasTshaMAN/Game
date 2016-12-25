import {expect} from "chai";
import {Position} from "../src/app/domain/Position";


describe('Position', () => {

    it('should allow to retrieve x coordinate', () => {
        let position = new Position(3, 4);

        expect(position.x).to.be.equal(3);
    });

    it('should allow to retrieve y coordinate', () => {
        let position = new Position(3, 4);

        expect(position.y).to.be.equal(4);
    });
});