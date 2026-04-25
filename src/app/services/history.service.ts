import { Injectable } from '@angular/core';
import { HistoryItem, OperationType } from '../models/history-item.model';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public static history: HistoryItem[] = [];
  private maxHistoryItems = 20;

  constructor() {
    console.log('HistoryService initialized, current history length:', HistoryService.history.length);
  }

  getHistory(): HistoryItem[] {
    console.log('getHistory called, current history:', HistoryService.history);
    return HistoryService.history;
  }

  addToHistory(item: Item): void {
    console.log('addToHistory called for item:', item);
    HistoryService.history = HistoryService.history.filter(historyItem => historyItem.item.item_id !== item.item_id);
    
    HistoryService.history.unshift({
      item,
      viewedAt: new Date(),
      operation: 'view'
    });
    
    if (HistoryService.history.length > this.maxHistoryItems) {
      HistoryService.history = HistoryService.history.slice(0, this.maxHistoryItems);
    }
    
    console.log('History after addToHistory:', HistoryService.history);
  }

  addOperationHistory(item: Item, operation: OperationType): void {
    console.log('addOperationHistory called for item:', item, 'operation:', operation);
    HistoryService.history.unshift({
      item,
      viewedAt: new Date(),
      operation: operation,
      operationTime: new Date()
    });
    
    if (HistoryService.history.length > this.maxHistoryItems) {
      HistoryService.history = HistoryService.history.slice(0, this.maxHistoryItems);
    }
    
    console.log('History after addOperationHistory:', HistoryService.history);
  }

  clearHistory(): void {
    console.log('clearHistory called');
    HistoryService.history = [];
    console.log('History after clearHistory:', HistoryService.history);
  }
}
