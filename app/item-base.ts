export abstract class ItemBase {
  public sellIn: number;
  public quality: number;

  constructor(sellIn, quality) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  isQualitytGreaterThanZero() {
    return this.quality > 0;
  }

  isQualityLowerThanFifty() {
    return this.quality < 50;
  }

  isSellinLowerThanZero() {
    return this.sellIn < 0;
  }

  increaseQuality() {
    this.quality++;
  }

  decreaseQuality() {
    this.quality--;
  }

  resetQuality() {
    this.quality = 0;
  }

  decreaseSellIn() {
    this.sellIn--;
  }

  abstract updateItem();
}
