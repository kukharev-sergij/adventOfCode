const fuel = require('./*');
const fuels = require('./**');
const data = require('./mock');

describe('2019', () => {
    describe('1', () => {
        const sum = (a, b) => a + b;
    
        test('*', () => {
            const result = data
                .map(i => fuel(i))
                .reduce(sum);
            expect(result).toBe(3481005);
        });
    
        test('**', () => {
            const result = data
                .map(i => [ ...fuels(i) ].reduce(sum))
                .reduce(sum);
            expect(result).toBe(5218616);
        });
    });
});