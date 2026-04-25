import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-item-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-management.component.html',
  styleUrl: './item-management.component.css'
})
export class ItemManagementComponent implements OnInit, OnDestroy {
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
  isEditing = false;
  editingItemId: number | null = null;
  private itemsSubscription: Subscription | null = null;

  constructor(private itemService: ItemService, private historyService: HistoryService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
    
    this.itemsSubscription = this.itemService.getItemsUpdatedListener().subscribe(items => {
      this.items = items;
    });
  }

  ngOnDestroy(): void {
    if (this.itemsSubscription) {
      this.itemsSubscription.unsubscribe();
    }
  }

  submitItem(): void {
    console.log('submitItem called, isEditing:', this.isEditing, 'editingItemId:', this.editingItemId);
    if (this.isEditing && this.editingItemId !== null) {
      console.log('Updating item:', this.newItem);
      this.itemService.updateItem(this.editingItemId, this.newItem).subscribe(updatedItem => {
        console.log('Item updated:', updatedItem);
        // 记录修改操作
        console.log('Adding edit operation to history');
        this.historyService.addOperationHistory(updatedItem, 'edit');
        this.resetForm();
        this.isEditing = false;
        this.editingItemId = null;
      });
    } else {
      console.log('Adding new item:', this.newItem);
      this.itemService.addItem(this.newItem).subscribe(item => {
        console.log('Item added:', item);
        // 记录添加操作
        console.log('Adding add operation to history');
        this.historyService.addOperationHistory(item, 'add');
        this.resetForm();
      });
    }
  }

  deleteItem(id: number): void {
    console.log('deleteItem called for id:', id);
    // 找到要删除的商品
    const itemToDelete = this.items.find(item => item.item_id === id);
    console.log('Item to delete:', itemToDelete);
    this.itemService.deleteItem(id).subscribe(() => {
      console.log('Item deleted');
      // 记录删除操作
      if (itemToDelete) {
        console.log('Adding delete operation to history');
        this.historyService.addOperationHistory(itemToDelete, 'delete');
      }
    });
  }

  startEdit(item: Item): void {
    this.newItem = { ...item };
    this.isEditing = true;
    this.editingItemId = item.item_id;
    setTimeout(() => {
      const formContainer = document.getElementById('item-form-container');
      if (formContainer) {
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }

  cancelEdit(): void {
    this.resetForm();
    this.isEditing = false;
    this.editingItemId = null;
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