import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  getTotalStock(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalValue(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getInStockCount(): number {
    return this.items.filter(item => item.stock_status !== 'Out of stock').length;
  }

  getOutOfStockCount(): number {
    return this.items.filter(item => item.stock_status === 'Out of stock').length;
  }
}