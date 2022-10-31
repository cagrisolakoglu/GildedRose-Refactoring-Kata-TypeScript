import { ItemBase } from "./item-base";

export class Sulfuras extends ItemBase {
  updateItem() {
    if (!this.isQualitytGreaterThanZero()) this.resetQuality();
  }
}
