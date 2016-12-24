import {expect} from "chai";
import 'mocha';

import {getRandomNumber} from "../src/app/domain/RandomNumberGenerator";


describe('Testing RandomNumberGenerator', () => {

    it('should return a number between min and max values', (done) => {
        let minValue = 3;
        let maxValue = 25;

        let randomValue = getRandomNumber(minValue, maxValue);

        expect(randomValue).to.be.at.least(minValue);
        expect(randomValue).to.be.at.most(maxValue);
        done();
    });
});