const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const { employees } = data;
  const employee = employees.find((employeec) => employeec.id === id);
  const primeiraEspecieId = employee.responsibleFor[0];
  const primeiraEspecie = data.species.find((species) => species.id === primeiraEspecieId);
  let oldestAnimal = null;
  for (const resident of primeiraEspecie.residents) {
    if (oldestAnimal === null || resident.age > oldestAnimal.age) {
      oldestAnimal = resident;
    }
  }
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
