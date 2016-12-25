import {expect} from "chai";
import {Position} from "../src/app/domain/Position";
import {Locatable} from "../src/app/domain/Locatable";
import {Goblin} from "../src/app/domain/Goblin";
import {Dragon} from "../src/app/domain/Dragon";


let testSubjects = [
    {
        name: 'Goblin',
        locatableType: Goblin
    },
    {
        name: 'Dragon',
        locatableType: Dragon
    }
];

describe('Locatable entities', () => {

    testSubjects.forEach((testSubject: {
        name: string,
        locatableType: {
            new (position: Position, health: number): Locatable;
        }
    }) => {

        let locatableType = testSubject.locatableType;

        describe(testSubject.name, () => {

            it('should be able to retrieve his position', () => {
                let originalPosition = new Position(3, 4);
                let locatable = new locatableType(originalPosition, 10);

                let actualPosition = locatable.getPosition();

                expect(actualPosition).to.be.equal(originalPosition);
            });
        });
    });
});