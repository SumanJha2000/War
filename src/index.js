const { convertArmy } = require('./utils/convertArmy');
const { Fight } = require('./logic/fight');

const myInput = "Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120";
const enemyInput = "Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100";

const myArmy = convertArmy(myInput);
const enemyArmy = convertArmy(enemyInput);

const fight = new Fight();
const result = fight.findWinningArrangement(myArmy, enemyArmy);

if (!result) {
  throw new Error("There is no chance of winning");
}

console.log("Winning combination found:");
console.log(result.map(p => `${p.type}#${p.count}`).join(";"));
