import { ItemBase } from "./item-base";
export class Normal extends ItemBase {
  updateItem() {
    if (this.isQualitytGreaterThanZero()) this.decreaseQuality();
    this.decreaseSellIn();
    if (this.isSellinLowerThanZero() && this.isQualitytGreaterThanZero()) this.decreaseQuality();
  }
}
