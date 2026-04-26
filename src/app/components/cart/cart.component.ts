import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';
import { ImageService } from '../../services/image.service';
import { HelpButtonComponent } from '../help-button/help-button.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, HelpButtonComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  items: Item[] = [];
  filteredItems: Item[] = [];
  
  // 分类过滤选项
  selectedSupplier: string = 'all';
  selectedStockStatus: string = 'all';
  selectedFeatured: string = 'all';
  
  // 唯一的供应商列表
  suppliers: string[] = [];

  constructor(
    private itemService: ItemService,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.filteredItems = items;
      this.extractSuppliers();
      this.filterItems();
    });
  }

  extractSuppliers(): void {
    // 提取唯一的供应商列表
    const supplierSet = new Set<string>();
    this.items.forEach(item => {
      if (item.supplier_name) {
        supplierSet.add(item.supplier_name);
      }
    });
    this.suppliers = Array.from(supplierSet).sort();
  }

  filterItems(): void {
    this.filteredItems = this.items.filter(item => {
      // 供应商过滤
      const supplierMatch = this.selectedSupplier === 'all' || item.supplier_name === this.selectedSupplier;
      
      // 库存状态过滤
      const stockStatusMatch = this.selectedStockStatus === 'all' || item.stock_status === this.selectedStockStatus;
      
      // 特色商品过滤
      const featuredMatch = this.selectedFeatured === 'all' || 
        (this.selectedFeatured === 'featured' && item.featured_item === 1) ||
        (this.selectedFeatured === 'non-featured' && item.featured_item === 0);
      
      return supplierMatch && stockStatusMatch && featuredMatch;
    });
  }

  // 重置所有过滤器
  resetFilters(): void {
    this.selectedSupplier = 'all';
    this.selectedStockStatus = 'all';
    this.selectedFeatured = 'all';
    this.filterItems();
  }

  getImageUrl(item: Item): string {
    return this.imageService.getImageUrl(item);
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

  // 过滤后的统计方法
  getFilteredInStockCount(): number {
    return this.filteredItems.filter(item => item.stock_status !== 'Out of stock').length;
  }

  getFilteredOutOfStockCount(): number {
    return this.filteredItems.filter(item => item.stock_status === 'Out of stock').length;
  }

  getFilteredTotalStock(): number {
    return this.filteredItems.reduce((total, item) => total + item.quantity, 0);
  }
}