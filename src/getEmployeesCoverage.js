const data = require('../data/zoo_data');

const { species, employees } = require('../data/zoo_data');

const resultArr = employees.map((thisObj) => {
  const convertedObj = {
    id: thisObj.id,
    fullName: `${thisObj.firstName} ${thisObj.lastName}`,
    species: thisObj.responsibleFor.map((id) => {
      const specieName = species.find((specie) => specie.id === id);
      return specieName ? specieName.name : null;
    }),
    locations: thisObj.responsibleFor.map((id) => {
      const specieLocation = species.find((specie) => specie.id === id);
      return specieLocation ? specieLocation.location : null;
    }),
  };
  return convertedObj;
});

const getEmployeesCoverage = (param) => {
  if (param === undefined) return resultArr;

  const checkEntry = resultArr.find((element) => (
    element.fullName.includes(Object.values(param))
      || element.id.includes(Object.values(param))
  ));

  if (checkEntry === undefined) {
    throw new Error('Informações inválidas');
  }

  return checkEntry;
};

module.exports = getEmployeesCoverage;
