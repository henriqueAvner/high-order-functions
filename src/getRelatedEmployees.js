const data = require('../data/zoo_data');

const isManager = (id) => {
  if (data.employees.some((employee) => employee.managers.includes(id))) {
    return true;
  }
  return false;
};
const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return data.employees.filter((employee) => employee.managers.includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};
module.exports = { isManager, getRelatedEmployees };
