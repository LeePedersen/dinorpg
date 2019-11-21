// <!-- NOTE TO LEE: I would like to work on the testing process with you tomorrow, please do not undergo them without me! -->
export class Equipment {
  constructor() {
    this.equipment1,
    this.equipment2,
    this.equipment3,
    this.equipment4,
    this.equipment5,
    this.equipment6;
  }

  addEquip1() {
    let equipment1;
    let randomEquip = Math.floor(3*Math.random())+1;
    if (randomEquip === 3) {
      equipment1 = "sniper rifle";
    }
    else if (randomEquip === 2) {
      equipment1 = "spear";
    }
    else if (randomEquip === 1) {
      equipment1 = "single arrow without a bow";
    }
    this.equipment1 = equipment1;
  }

  addEquip2() {
    let equipment2;
    let randomEquip = Math.floor(3*Math.random())+1;
    if (randomEquip === 3) {
      equipment2 = "multi-purpose shovel";
    }
    else if (randomEquip === 2) {
      equipment2 = "proud, inspirational rainstick";
    }
    else if (randomEquip === 1) {
      equipment2 = "passive-aggressive farming ho";
    }
    this.equipment2 = equipment2;
  }

  addEquip3() {
    let equipment3;
    let randomEquip = Math.floor(3*Math.random())+1;
    if (randomEquip === 3) {
      equipment3 = "surpisingly undisturbed ratatouille";
    }
    else if (randomEquip === 2) {
      equipment3 = "contemplative salad";
    }
    else if (randomEquip === 1) {
      equipment3 = "damp twinkie";
    }
    this.equipment3 = equipment3;
  }


  addEquip4() {
    let equipment4;
    let randomEquip = Math.floor(3*Math.random())+1;
    if (randomEquip === 3) {
      equipment4 = "awesome weapon";
    }
    else if (randomEquip === 2) {
      equipment4 = "average weapon";
    }
    else if (randomEquip === 1) {
      equipment4 = "awful weapon";
    }
    this.equipment4 = equipment4;
  }


  addEquip5() {
    let equipment5;
    let randomEquip = Math.floor(3*Math.random())+1;
    if (randomEquip === 3) {
      equipment5 = "awesome tool";
    }
    else if (randomEquip === 2) {
      equipment5 = "average tool";
    }
    else if (randomEquip === 1) {
      equipment5 = "awful tool";
    }
    this.equipment5 = equipment5;
  }


  addEquip6() {
    let equipment6;
    let randomEquip = Math.floor(3*Math.random())+1;
    if (randomEquip === 3) {
      equipment6 = "awesome consumable";
    }
    else if (randomEquip === 2) {
      equipment6 = "average consumable";
    }
    else if (randomEquip === 1) {
      equipment6 = "awful consumable";
    }
    this.equipment6 = equipment6;
  }

}

export class Chances {
  
}
