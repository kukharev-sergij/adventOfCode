const data = require('./task-2019-01.json');
const { fuel, fuels } = require('./task-2019-01');

describe('2019', () => {
    const sum = (a, b) => a + b;

    test('01*', () => {
        expect(data.map(i => fuel(i)).reduce(sum)).toBe(3481005);
    });

    test('01**', () => {
        expect(data.map(i => [ ...fuels(i) ].reduce(sum)).reduce(sum)).toBe(5218616);
    });
});