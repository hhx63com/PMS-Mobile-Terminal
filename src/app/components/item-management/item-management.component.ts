import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-management.component.html',
  styleUrl: './item-management.component.css'
})
export class ItemManagementComponent implements OnInit {
  items: Item[] = [];
  newItem: Item = {
    item_id: 0,
    item_name: '',
    category: '',
    quantity: 0,
    price: 0,
    supplier_name: '',
    stock_status: 'In stock',
    featured_item: 0,
    special_note: ''
  };

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  addItem(): void {
    this.newItem.item_id = Math.max(...this.items.map(item => item.item_id)) + 1;
    this.itemService.addItem(this.newItem).subscribe(item => {
      this.items.push(item);
      this.resetForm();
    });
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item.item_id !== id);
    });
  }

  resetForm(): void {
    this.newItem = {
      item_id: 0,
      item_name: '',
      category: '',
      quantity: 0,
      price: 0,
      supplier_name: '',
      stock_status: 'In stock',
      featured_item: 0,
      special_note: ''
    };
  }
}
