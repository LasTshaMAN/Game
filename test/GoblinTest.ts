import {expect} from "chai";
import * as TypeMoq from "typemoq";
import {Goblin} from "../src/app/domain/Goblin";



describe('Testing Goblin', () => {

    it('should be able to retrieve his position', (done) => {
        // let spriteMock = TypeMoq.Mock.ofType(Phaser.Sprite);
        // spriteMock.setup(x => x.centerX).returns(() => 3);
        // spriteMock.setup(x => x.centerY).returns(() => 4);
        // let goblin = new Goblin(10, spriteMock.object);
        //
        // let actualPosition = goblin.getPosition();
        //
        // expect(actualPosition.x).to.be.equal(3);
        // expect(actualPosition.y).to.be.equal(4);
        done();
    });
});