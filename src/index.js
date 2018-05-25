var uniqueRandomArray = require('unique-random-array');
var rockStarNames = require('./rockstar-names.json');

module.exports = {
    all : rockStarNames,
    random: uniqueRandomArray(rockStarNames)
};