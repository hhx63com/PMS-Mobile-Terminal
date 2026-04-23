import { Injectable } from '@angular/core';
import { HistoryItem } from '../models/history-item.model';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private history: HistoryItem[] = [];
  private maxHistoryItems = 20;

  constructor() { }

  getHistory(): HistoryItem[] {
    return this.history;
  }

  addToHistory(item: Item): void {
    // Remove if already exists
    this.history = this.history.filter(historyItem => historyItem.item.item_id !== item.item_id);
    
    // Add to beginning
    this.history.unshift({
      item,
      viewedAt: new Date()
    });
    
    // Limit history size
    if (this.history.length > this.maxHistoryItems) {
      this.history = this.history.slice(0, this.maxHistoryItems);
    }
  }

  clearHistory(): void {
    this.history = [];
  }
}
