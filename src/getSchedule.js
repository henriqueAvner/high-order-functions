const data = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => () => {
  return data.species.filter((specie) => {
    if (specie.name === scheduleTarget) {
      return specie.availability;
    }
  });
};
module.exports = getSchedule;
