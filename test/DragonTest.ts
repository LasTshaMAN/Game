import {expect} from "chai";
import {Position} from "../src/app/domain/Position";
import {Dragon} from "../src/app/domain/Dragon";


describe('Dragon', () => {

    it('should be able to fly to another position', () => {
        let dragon = new Dragon(new Position(3, 4), 10);
        let anotherPosition = new Position(5, 10);

        dragon.flyTo(anotherPosition);

        expect(dragon.getPosition()).to.be.equal(anotherPosition);
    });
});