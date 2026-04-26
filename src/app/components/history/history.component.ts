import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpButtonComponent } from '../help-button/help-button.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, HelpButtonComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
