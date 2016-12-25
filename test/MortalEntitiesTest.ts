import {expect} from "chai";
import {Goblin} from "../src/app/domain/Goblin";
import {Dragon} from "../src/app/domain/Dragon";
import {Mortal} from "../src/app/domain/Mortal";
import {Position} from "../src/app/domain/Position";


let testSubjects = [
    {
        name: 'Goblin',
        mortalType: Goblin
    },
    {
        name: 'Dragon',
        mortalType: Dragon
    }
];

describe('Mortal entities', () => {

    testSubjects.forEach((testSubject: {
        name: string,
        mortalType: {
            new (position: Position, health: number): Mortal;
        }
    }) => {

        let mortalType = testSubject.mortalType;

        describe(testSubject.name, () => {

            describe('Health', () => {

                it('should decrease when he is attacked', () => {
                    let mortal = new mortalType(new Position(3, 4), 10);

                    mortal.takeDamage(4);

                    expect(mortal.getHealth()).to.be.equal(6);
                });

                it('should not drop below zero', () => {
                    let mortal = new mortalType(new Position(3, 4), 10);

                    mortal.takeDamage(45);

                    expect(mortal.getHealth()).to.be.equal(0);
                });
            });

            it('should be alive when his health is > 0', () => {
                let mortal = new mortalType(new Position(3, 4), 10);

                mortal.takeDamage(9);

                expect(mortal.isAlive()).to.be.true;
            });

            it('should die when his health drops to zero', () => {
                let mortal = new mortalType(new Position(3, 4), 10);

                mortal.takeDamage(10);

                expect(mortal.isAlive()).to.be.false;
            });
        });
    });
});