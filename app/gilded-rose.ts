
import { Item } from "./item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    this.items.forEach(item => {
      item.updateItem()
    });
    return this.items;
  }
}
