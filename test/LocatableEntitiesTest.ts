import { expect } from "chai";
import { Position } from "../src/app/domain/Position";
import { Locatable } from "../src/app/domain/Locatable";
import { Goblin } from "../src/app/domain/Goblin";
import { Dragon } from "../src/app/domain/Dragon";


let originalPosition = new Position(3, 4);

let testSubjects = [
    {
        name: 'Goblin',
        locatable: new Goblin(originalPosition, 10)
    },
    {
        name: 'Dragon',
        locatable: new Dragon(originalPosition)
    }
];

describe('Locatable entities', () => {

    testSubjects.forEach((testSubject: { name: string, locatable: Locatable }) => {
        let name = testSubject.name;
        let unit = testSubject.locatable;

        describe(name, () => {

            it('should be able to retrieve his position', () => {
                let actualPosition = unit.getPosition();

                expect(actualPosition).to.be.deep.equal(originalPosition);
            });
        });
    });
});