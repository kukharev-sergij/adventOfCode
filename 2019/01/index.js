const input = require('./input.json');

function fuel(weight) {
    return Math.max(Math.floor(weight / 3) - 2, 0);
}

function * fuels(weight) {
    const f = fuel(weight);
    if (f > 0) {
        yield f;
        yield *fuels(f);
    }
}

function sum(a, b) {
    return a + b;
}

console.log(input.map(i => fuel(i)).reduce(sum));
console.log(input.map(i => [ ...fuels(i) ].reduce(sum)).reduce(sum));
