import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';
import { HistoryService } from '../../services/history.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private itemService: ItemService, 
    private historyService: HistoryService, 
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  viewItem(item: Item): void {
    this.historyService.addToHistory(item);
    // Navigate to item detail page
  }

  addToCart(item: Item): void {
    this.cartService.addToCart(item);
    alert('商品已添加到购物车');
  }
}
