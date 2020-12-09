const fuel = (weight) => Math.max(Math.floor(weight / 3) - 2, 0);

module.exports = fuel;
