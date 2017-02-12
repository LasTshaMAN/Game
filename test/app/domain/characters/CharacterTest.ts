import {expect} from "chai";
import {Position} from "../../../../src/app/domain/Position";
import {Character} from "../../../../src/app/domain/characters/Character";


describe('Character', () => {

    describe('as a Mortal entity', () => {

        describe('his health', () => {

            it('should decrease when he takes damage', () => {
                let character = new SomeCharacter(new Position(3, 4), 10);

                character.takeDamage(4);

                expect(character.getHealth()).to.be.equal(6);
            });

            it('should not drop below zero even when he dies', () => {
                let character = new SomeCharacter(new Position(3, 4), 10);

                character.takeDamage(45);

                expect(character.getHealth()).to.be.equal(0);
            });
        });

        it('should be alive when his health is > 0', () => {
            let character = new SomeCharacter(new Position(3, 4), 10);

            character.takeDamage(9);

            expect(character.isAlive()).to.be.true;
        });

        it('should die when his health drops to zero', () => {
            let character = new SomeCharacter(new Position(3, 4), 10);

            character.takeDamage(10);

            expect(character.isAlive()).to.be.false;
        });
    });

    describe('as a Locatable entity', () => {

        it('should have a retrievable position', () => {
            let originalPosition = new Position(3, 4);
            let character = new SomeCharacter(originalPosition, 10);

            let actualPosition = character.getPosition();

            expect(actualPosition).to.be.equal(originalPosition);
        });

        it('should acknowledge that he is close to another Character if he really is', () => {
            let character = new SomeCharacter(new Position(3, 4), 10);
            let anotherCharacter = new SomeCharacter(new Position(4, 5), 10);

            expect(character.closeTo(anotherCharacter)).to.be.true;
        });

        it('should not acknowledge that he is close to another Character if he really is not', () => {
            let character = new SomeCharacter(new Position(3, 4), 10);
            let anotherCharacter = new SomeCharacter(new Position(10, 20), 10);

            expect(character.closeTo(anotherCharacter)).to.be.false;
        });
    });
});

class SomeCharacter extends Character {
}