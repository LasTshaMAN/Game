import { expect } from "chai";
import { Position } from "../src/app/domain/Position";
import { Goblin } from "../src/app/domain/Goblin";


describe('Goblin', () => {

    describe('Health', () => {

        it('should decrease when he is attacked', () => {
            let goblin = new Goblin(new Position(3, 4), 10);

            goblin.takeDamage(4);

            expect(goblin.getHealth()).to.be.equal(6);
        });

        it('should not drop below zero', () => {
            let goblin = new Goblin(new Position(3, 4), 10);

            goblin.takeDamage(45);

            expect(goblin.getHealth()).to.be.equal(0);
        });
    });

    it('should be alive when his health is > 0', () => {
        let goblin = new Goblin(new Position(3, 4), 10);

        goblin.takeDamage(9);

        expect(goblin.isAlive()).to.be.true;
    });

    it('should die when his health drops to zero', () => {
        let goblin = new Goblin(new Position(3, 4), 10);

        goblin.takeDamage(10);

        expect(goblin.isAlive()).to.be.false;
    });
});