import { ItemBase } from "./item-base";

export class AgedBrie extends ItemBase {
  updateItem() {
    if (this.isQualityLowerThanFifty()) this.increaseQuality();
    this.decreaseSellIn();
    if (this.isSellinLowerThanZero() && this.isQualitytGreaterThanZero()) this.decreaseQuality();
  }
}
