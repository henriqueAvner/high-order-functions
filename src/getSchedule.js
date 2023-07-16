const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

const weekD = Object.keys(hours);

const infosOfZoo = () => {
  const obj = weekD.reduce((accumulator, currElement) => {
    accumulator[currElement] = {
      officeHour: `Open from ${hours[currElement].open}am until ${hours[currElement].close}pm`,
      exhibition: species
        .filter((animal) => animal.availability
          .includes(currElement))
        .map((thisAnimal) => thisAnimal.name),
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
