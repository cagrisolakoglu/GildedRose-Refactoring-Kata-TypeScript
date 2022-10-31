import { ItemBase } from "./item-base";

export class Backstage extends ItemBase {

  updateItem() {
    if (this.isQualityLowerThanFifty()) {
      this.increaseQuality();
      if (this.sellIn < 11 && this.isQualityLowerThanFifty()) this.increaseQuality();
      if (this.sellIn < 6 && this.isQualityLowerThanFifty()) this.increaseQuality();
    }

    this.decreaseSellIn();

    if (this.isSellinLowerThanZero()) {
      this.isQualitytGreaterThanZero() ? this.decreaseQuality() : this.resetQuality();
    }
  }

}
