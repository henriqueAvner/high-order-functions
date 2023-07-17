const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

const weekD = Object.keys(hours);

const infosOfZoo = () => {
  const obj = {};
  for (const day of weekD) {
    obj[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species
        .filter((animal) => animal.availability.includes(day))
        .map((thisAnimal) => thisAnimal.name),
    };
  }
  obj.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return obj;
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return infosOfZoo();
  const isSpecies = species.some((specie) => scheduleTarget === specie.name);
  const isDay = weekD.includes(scheduleTarget);
  if (!isSpecies && !isDay) {
    return infosOfZoo();
  }
  if (isDay) {
    return { [scheduleTarget]: infosOfZoo()[scheduleTarget] };
  }
  return species.find((dispoSpecie) => dispoSpecie.name === scheduleTarget).availability;
}

module.exports = getSchedule;
