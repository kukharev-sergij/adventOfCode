const fuel = (weight) => Math.max(Math.floor(weight / 3) - 2, 0);
const fuels = function * (weight) {
    const f = fuel(weight);
    if (f > 0) {
        yield f;
        yield *fuels(f);
    }
};

module.exports = {
    fuel,
    fuels,
};
