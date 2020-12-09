const fuel = require('./*');

const fuels = function * (weight) {
    const f = fuel(weight);
    if (f > 0) {
        yield f;
        yield *fuels(f);
    }
};

module.exports = fuels;
