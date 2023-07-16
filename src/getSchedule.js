const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

const weekD = Object.keys(hours);

const infosOfZoo = () => {

  const obj = weekD.reduce((accumulator, currentElement) => {
    accumulator[currentElement] = {
      officeHour: `Open from ${hours[currentElement].open}am until ${hours[currentElement].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(currentElement)).map((thisAnimal) => thisAnimal.name),
    };
    return accumulator;
  }, {});
  obj.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return obj;
};

function getSchedule(scheduleTarget) {

  if (!scheduleTarget) {
    return infosOfZoo();
  }

  const truthSpecies = species
    .some((specie) => scheduleTarget === specie.name);
  if (!truthSpecies && !weekD.includes(scheduleTarget)) {
    return infosOfZoo();
  }
 
  if (weekD.includes(scheduleTarget)) {
    return { [scheduleTarget]: infosOfZoo()[scheduleTarget] };
  }

  return species.find((dispoSpecie) => dispoSpecie.name === scheduleTarget).availability;
}
module.exports = getSchedule;
