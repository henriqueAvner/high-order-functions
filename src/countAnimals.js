const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal || !animal.species) {
    const obj = {};
    data.species.forEach((species) => {
      const count = species.residents.length;
      obj[species.name] = count;
    });
    return obj;
  }
  const species = data.species.find((specie) => specie.name === animal.species);
  if (!species) {
    return 0;
  }
  if (animal.sex) {
    const animalsFind = species.residents.filter((resident) => resident.sex === animal.sex).length;
    return animalsFind;
  }
  const count = species.residents.length;
  return count;
};

module.exports = countAnimals;
