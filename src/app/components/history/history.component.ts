import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryItem } from '../../models/history-item.model';
import { HistoryService } from '../../services/history.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  history: HistoryItem[] = [];

  constructor(
    private historyService: HistoryService,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    console.log('HistoryComponent ngOnInit called');
    this.loadHistory();
  }

  loadHistory(): void {
    console.log('loadHistory called');
    this.history = this.historyService.getHistory();
    console.log('Loaded history:', this.history);
  }

  getImageUrl(item: any): string {
    return this.imageService.getImageUrl(item);
  }

  clearHistory(): void {
    this.historyService.clearHistory();
    this.history = [];
  }
}