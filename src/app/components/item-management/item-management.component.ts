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
  filteredItems: Item[] = [];
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
  searchTerm: string = '';
  private itemsSubscription: Subscription | null = null;

  constructor(private itemService: ItemService, private historyService: HistoryService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.filteredItems = items;
    });
    
    this.itemsSubscription = this.itemService.getItemsUpdatedListener().subscribe(items => {
      this.items = items;
      this.filterItems();
    });
  }

  ngOnDestroy(): void {
    if (this.itemsSubscription) {
      this.itemsSubscription.unsubscribe();
    }
  }

  submitItem(): void {
    if (this.isEditing && this.editingItemId !== null) {
      this.itemService.updateItem(this.editingItemId, this.newItem).subscribe(updatedItem => {
        this.historyService.addOperationHistory(updatedItem, 'edit');
        this.resetForm();
        this.isEditing = false;
        this.editingItemId = null;
      });
    } else {
      this.itemService.addItem(this.newItem).subscribe(item => {
        this.historyService.addOperationHistory(item, 'add');
        this.resetForm();
      });
    }
  }

  deleteItem(id: number): void {
    const itemToDelete = this.items.find(item => item.item_id === id);
    this.itemService.deleteItem(id).subscribe(() => {
      if (itemToDelete) {
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

  searchItems(): void {
    this.filterItems();
  }

  filterItems(): void {
    if (!this.searchTerm) {
      this.filteredItems = this.items;
    } else {
      const searchLower = this.searchTerm.toLowerCase();
      this.filteredItems = this.items.filter(item => 
        item.item_name.toLowerCase().includes(searchLower)
      );
    }
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filterItems();
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.searchItems();
    }
  }
}
