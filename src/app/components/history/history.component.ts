import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryItem } from '../../models/history-item.model';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  history: HistoryItem[] = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.history = this.historyService.getHistory();
  }

  clearHistory(): void {
    this.historyService.clearHistory();
    this.history = [];
  }
}
