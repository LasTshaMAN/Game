import {expect} from "chai";
import {getRandomNumber} from "../src/app/utils/RandomNumberGenerator";


describe('RandomNumberGenerator', () => {

    it('should allow to generate a number between min and max values', () => {
        let minValue = 3;
        let maxValue = 25;

        let randomValue = getRandomNumber(minValue, maxValue);

        expect(randomValue).to.be.at.least(minValue);
        expect(randomValue).to.be.at.most(maxValue);
    });
});