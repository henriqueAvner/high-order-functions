const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  }); return { child, adult, senior };
};
const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  if (entrants === undefined) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);

  return (child * data.prices.child) + (adult * data.prices.adult) + (senior * data.prices.senior);
};
module.exports = { calculateEntry, countEntrants };
