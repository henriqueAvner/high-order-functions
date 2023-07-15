const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .every((specie) => {
    if (specie.name === animal) {
      return specie.residents.every((resident) => resident.age >= age);
    }
    return true;
  });
module.exports = getAnimalsOlderThan;
