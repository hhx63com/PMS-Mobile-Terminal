import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';
import { HistoryService } from '../../services/history.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  filteredItems: Item[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'all';
  categories: string[] = ['all'];
  searchHistory: string[] = [];
  showSearchHistory: boolean = false;
  private maxHistoryItems = 5;

  constructor(
    private itemService: ItemService, 
    private historyService: HistoryService,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.filteredItems = items;
      this.extractCategories();
      this.loadSearchHistory();
    });
  }

  extractCategories(): void {
    const uniqueCategories = new Set(this.items.map(item => item.category));
    this.categories = ['all', ...Array.from(uniqueCategories)];
  }

  viewItem(item: Item): void {
    this.historyService.addToHistory(item);
  }

  getImageUrl(item: Item): string {
    return this.imageService.getImageUrl(item);
  }

  searchItems(): void {
    if (this.searchTerm.trim()) {
      this.addToSearchHistory(this.searchTerm.trim());
    }
    
    this.filteredItems = this.items.filter(item => {
      const matchesSearch = item.item_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          item.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          item.supplier_name.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = this.selectedCategory === 'all' || item.category === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    this.showSearchHistory = false;
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.searchItems();
    }
  }

  resetFilter(): void {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.filteredItems = this.items;
  }

  addToSearchHistory(term: string): void {
    // Remove if already exists
    this.searchHistory = this.searchHistory.filter(item => item !== term);
    
    // Add to beginning
    this.searchHistory.unshift(term);
    
    // Limit history size
    if (this.searchHistory.length > this.maxHistoryItems) {
      this.searchHistory = this.searchHistory.slice(0, this.maxHistoryItems);
    }
    
    // Save to localStorage
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  }

  loadSearchHistory(): void {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      this.searchHistory = JSON.parse(savedHistory);
    }
  }

  clearSearchHistory(): void {
    this.searchHistory = [];
    localStorage.removeItem('searchHistory');
  }

  useSearchTerm(term: string): void {
    this.searchTerm = term;
    this.searchItems();
  }

  toggleSearchHistory(): void {
    this.showSearchHistory = !this.showSearchHistory;
  }
}