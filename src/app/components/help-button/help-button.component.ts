import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help-button.component.html',
  styleUrl: './help-button.component.css'
})
export class HelpButtonComponent {
  @Input() title: string = '帮助';
  isHelpOpen: boolean = false;

  toggleHelp() {
    this.isHelpOpen = !this.isHelpOpen;
  }

  closeHelp() {
    this.isHelpOpen = false;
  }
}