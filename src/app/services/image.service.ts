import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageMap: Map<string, string> = new Map([
    ['Macbook Pro', 'Macbook.jpg'],
    ['macbook', 'Macbook.jpg'],
    ['Iphone', 'Iphone.jpg'],
    ['Apple watch', 'Apple Watch.jpg'],
    ['Apple Watch', 'Apple Watch.jpg'],
    ['Tablet', 'Tablet.jpg'],
    ['Soldering Iron', 'Soldering Iron.jpg'],
    ['Dell Inspiron Desktop', 'Dell Inspiron Desktop.jpg'],
    ['Lenovo IdeaPad Slim 5', 'Lenovo IdeaPad Slim 5.jpg'],
    ['Apple iPad 10th Gen', 'Apple iPad 10th Gen.jpg'],
    ['Samsung Galaxy Tab A9', 'Samsung Galaxy Tab A9.jpg'],
    ['Sony WH-1000XM5 Headphones', 'Sonu WH-1000XM5 Headphones.jpg'],
    ['Sonu WH-1000XM5 Headphones', 'Sonu WH-1000XM5 Headphones.jpg'],
    ['JBL Flip 6 Speaker', 'JBL Flip 6.jpg'],
    ['JBL Flip 6', 'JBL Flip 6.jpg'],
    ['LG 55 Inch Smart TV', 'name.jpg'],
    ['Samsung 32 Inch Monitor', 'name.jpg'],
    ['Canon PIXMA Printer', 'name.jpg'],
    ['Logitech Wireless Mouse', 'Logitech Wireless Mouse.jpg'],
    ['Office Study Desk', 'Office Study Desk.jpg'],
    ['Ergonomic Office Chair', 'Ergonomic Office Chair.jpg'],
    ['Bookshelf 5 Tier', 'Bookshelf 5 Tier.jpg'],
    ['Bedside Table', 'Bedside Table.jpg'],
    ['T-shirt', 'T-shirt.jpg'],
    ['T-Shirt', 'T-shirt.jpg'],
    ['Ipad 7', 'Ipad 7.jpg'],
    ['Iphone 16', 'Iphone 16.jpg'],
    ['Iphone 2', 'Iphone 2.jpg'],
    ['Iphone 3', 'Iphone 3.jpg'],
    ['IPad 11 Pro', 'IPad 11 Pro.jpg'],
    ['iphone 11 pro', 'IPhone 11 Pro.jpg'],
    ['IPhone 11 Pro', 'IPhone 11 Pro.jpg'],
    ['desks', 'Desks.jpg'],
    ['desk', 'Desks.jpg'],
    ['Desk', 'Desks.jpg'],
    ['WWE T-Shirt', 'WWE T-shirt.jpg'],
    ['TestItem_A3_1942', 'TestItem_A3_1942.jpg'],
    ['callams item', 'Callams Item.jpg'],
    ['Hello World', 'Hello World.jpg'],
    ['Pliers', 'Pliers.jpg'],
    ['bag', 'Bag.jpg'],
    ['Bag', 'Bag.jpg'],
    ['Hammer', 'Hammer.jpg'],
    ['Generic Electronics Item', 'Generaic Electronics Item.jpg'],
    ['Generic Electronics Item 2', 'Generic Electronics Item 2.jpg'],
    ['Generic Electronics Item 3', 'Generic Electronics Item 3.jpg'],
    ['name', 'name.jpg'],
    ['nnnn', 'nnnn.jpg'],
    ['laptop1', 'Laptop1.jpg'],
    ['book', 'Book.jpg'],
    ['Book', 'Book.jpg'],
  ]);

  getImageUrl(item: Item): string {
    const fileName = this.imageMap.get(item.item_name);
    if (fileName) {
      return `assets/product-images/${fileName}`;
    }
    return this.getDefaultImage(item.category);
  }

  private getDefaultImage(category: string): string {
    switch (category.toLowerCase()) {
      case 'electronics':
        return 'assets/product-images/Generic Electronics Item.jpg';
      case 'furniture':
        return 'assets/product-images/Desks.jpg';
      case 'clothing':
        return 'assets/product-images/T-shirt.jpg';
      case 'tools':
        return 'assets/product-images/Hammer.jpg';
      case 'books':
        return 'assets/product-images/Book.jpg';
      default:
        return 'assets/product-images/name.jpg';
    }
  }
}