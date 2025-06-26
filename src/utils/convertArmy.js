const { Platoon } = require('../models/platoon');

function convertArmy(input) {
  return input.split(";").map(str => {
    const [type, count] = str.split("#");
    return new Platoon(type, parseInt(count));
  });
}

module.exports = { convertArmy };
