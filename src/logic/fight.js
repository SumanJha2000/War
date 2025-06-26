class Fight {
  constructor() {
    this.advantageMap = {
      Militia: ["Spearmen", "LightCavalry"],
      Spearmen: ["LightCavalry", "HeavyCavalry"],
      LightCavalry: ["FootArcher", "CavalryArcher"],
      HeavyCavalry: ["Militia", "FootArcher", "LightCavalry"],
      CavalryArcher: ["Spearmen", "HeavyCavalry"],
      FootArcher: ["Militia", "CavalryArcher"]
    };
  }

  findWinningArrangement(myArmy, enemyArmy) {
    const allPerms = [];
    this.getAllPermutations(myArmy, 0, allPerms);

    for (const perm of allPerms) {
      if (this.isWinning(perm, enemyArmy)) return perm;
    }

    return null;
  }

  isWinning(my, enemy) {
    let wins = 0;
    for (let i = 0; i < my.length; i++) {
      const myPower = this.getPower(my[i], enemy[i]);
      const enemyPower = this.getPower(enemy[i], my[i]);
      if (myPower > enemyPower) wins++;
    }
    return wins >= 3;
  }

  getPower(attacker, defender) {
    return this.hasAdvantage(attacker.type, defender.type)
      ? attacker.count * 2
      : attacker.count;
  }

  hasAdvantage(a, b) {
    return this.advantageMap[a]?.includes(b);
  }

  getAllPermutations(arr, i, result) {
    if (i === arr.length) {
      result.push([...arr]);
      return;
    }

    for (let j = i; j < arr.length; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      this.getAllPermutations(arr, i + 1, result);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}

module.exports = { Fight };
