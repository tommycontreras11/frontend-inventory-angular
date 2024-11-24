import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-card',
  imports: [CommonModule],
  templateUrl: './main-card.component.html',
  styleUrls: ['./../../../styles.css'],
})
export class MainCardComponent {
  @Input() title!: string;
  @Input() editUrl?: string;

  @Output() onDelete = new EventEmitter<number>();

  handleDelete() {
    this.onDelete.emit();
  }
}
