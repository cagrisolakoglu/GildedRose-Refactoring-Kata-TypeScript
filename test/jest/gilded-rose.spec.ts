import { GildedRose } from '@/gilded-rose';
import { Item } from '@/item';


const items = [
  new Item("+5 Dexterity Vest", 10, 20)
  // new Item("Aged Brie", 2, 0),
  // new Item("Elixir of the Mongoose", 5, 7),
  // new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  // new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  // new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  // new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  // new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  // new Item("Conjured Mana Cake", 3, 6)
];

describe('Gilded Rose', () => {
  it('Normal Should Be', () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 10, 20)]);
    const results = gildedRose.updateQuality();
    expect(results[0].quality).toEqual(19);
    expect(results[0].sellIn).toEqual(9);
  });
  it('Aged Brie Should Be', () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 2, 0)]);
    const results = gildedRose.updateQuality();
    expect(results[0].quality).toEqual(1);
    expect(results[0].sellIn).toEqual(1);
  });
  it('Sulfuras Should Be', () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const results = gildedRose.updateQuality();
    expect(results[0].quality).toEqual(80);
    expect(results[0].sellIn).toEqual(0);
  });
  it('Sulfuras Should Be', () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const results = gildedRose.updateQuality();
    expect(results[0].quality).toEqual(80);
    expect(results[0].sellIn).toEqual(-1);
  });

  it('Backstage Should Be', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const results = gildedRose.updateQuality();
    expect(results[0].quality).toEqual(21);
    expect(results[0].sellIn).toEqual(14);
  });

  it('Backstage Should Be', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const results = gildedRose.updateQuality();
    expect(results[0].quality).toEqual(50);
    expect(results[0].sellIn).toEqual(9);
  });
  it('Backstage Should Be', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
    const results = gildedRose.updateQuality();
    expect(results[0].quality).toEqual(50);
    expect(results[0].sellIn).toEqual(4);
  });
  it('Normal Should Be', () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
    const results = gildedRose.updateQuality();
    expect(results[0].quality).toEqual(5);
    expect(results[0].sellIn).toEqual(2);
  });

});
