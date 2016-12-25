import {expect} from "chai";
import {Position} from "../src/app/domain/Position";


describe('Position', () => {

    let position: Position;

    beforeEach('create Position', () => {
        position = new Position(3, 4);
    });

    it('should be able to retrieve x coordinate', () => {
        let x = position.x;

        expect(position.x).to.be.equal(3);
    });

    it('should be able to retrieve y coordinate', () => {
        let y = position.y;

        expect(position.y).to.be.equal(4);
    });

    it('should acknowledge that Position is close if it is', () => {
        let anotherClosePosition = new Position(4, 5);

        expect(position.closeTo(anotherClosePosition)).to.be.true;
    });

    it('should not acknowledge that Position is close if it is not', () => {
        let anotherDistantPosition = new Position(10, 20);

        expect(position.closeTo(anotherDistantPosition)).to.be.false;
    });
});