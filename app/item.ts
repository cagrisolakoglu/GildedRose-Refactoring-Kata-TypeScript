import { AgedBrie } from "./aged-brie";
import { Backstage } from "./backstage";
import { NameTypes } from "./enums/name-types";
import { ItemBase } from "./item-base";
import { Normal } from "./normal";
import { Sulfuras } from "./sulfuras";

export class Item extends ItemBase {
  name: string;
  constructor(name: string, sellIn: number, quality: number) {
    super(sellIn, quality);
    this.checkNameIsEmpty(name);
    this.name = name;
  }
  private checkNameIsEmpty(name: string) {
    if (name == "" || name == null) throw new Error("Name is required");
  }

  updateItem() {
    var tempItem: ItemBase;
    switch (this.name) {
      case NameTypes.AgedBrie:
        tempItem = new AgedBrie(this.sellIn, this.quality);
        break;
      case NameTypes.Backstage:
        tempItem = new Backstage(this.sellIn, this.quality);
        break;
      case NameTypes.Sulfuras:
        tempItem = new Sulfuras(this.sellIn, this.quality);
        break;
      default:
        tempItem = new Normal(this.sellIn, this.quality);
        break;
    }
    tempItem.updateItem();
    this.quality = tempItem.quality;
    this.sellIn = tempItem.sellIn;
  }
}
