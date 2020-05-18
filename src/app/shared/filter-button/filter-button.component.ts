import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent {
  @Input() iconName: string;
  @Input() isActive = false;

  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  resetFilters(): void {
    this.reset.emit();
  }
}
