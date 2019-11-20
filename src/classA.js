export class Equipment {
  constructor() {
  }

  addEquip1() {
    let equipment1;
    let randomEquip = Math.floor(Math.random() * (4 - 1));
    if (randomEquip === 3) {
      equipment1 = "automatic rifle"
    }
    else if (randomEquip === 2) {
      equipment1 = "spear"
    }
    else if (randomEquip === 1) {
      equipment1 = "single arrow without a bow"
    }
    this.equipment1 = equipment1;
  }

  addEquip2() {
    let equipment2;
    let randomEquip = Math.floor(Math.random() * (4 - 1));
    if (randomEquip === 3) {
      equipment2 = "Shakespearean insults encyclopedia"
    }
    else if (randomEquip === 2) {
      equipment2 = "inspirational rainstick"
    }
    else if (randomEquip === 1) {
      equipment2 = "book titled: the wisdom of Sarah Palin"
    }
    this.equipment2 = equipment2;
  }

  addEquip3() {
    let equipment3;
    let randomEquip = Math.floor(Math.random() * (4 - 1));
    if (randomEquip === 3) {
      equipment3 = "surpisingly undisturbed ratatouille"
    }
    else if (randomEquip === 2) {
      equipment3 = "contemplative salad"
    }
    else if (randomEquip === 1) {
      equipment3 = "a single mcDonald's burger patty"
    }
    this.equipment3 = equipment3;
  }

}
