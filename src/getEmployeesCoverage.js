const data = require('../data/zoo_data');

const { species, employees } = require('../data/zoo_data');

const resultArr = employees.map((thisObj) => {
  const convertedObj = {
    id: thisObj.id,
    fullName: `${thisObj.firstName} ${thisObj.lastName}`,
    species: thisObj.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).name),
    locations: thisObj.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).location),
  };
  return convertedObj;
});

const getEmployeesCoverage = (param) => {
  if (param === undefined) return resultArr;
  const checkEntry = resultArr
    .find((element) => element.fullName.includes(Object.values(param))
    || element.id.includes(Object.values(param)));
  if (checkEntry === undefined) {
    throw new Error('Informações inválidas');
  }
  return checkEntry;
};
module.exports = getEmployeesCoverage;
