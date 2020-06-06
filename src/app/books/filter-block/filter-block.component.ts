import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss']
})
export class FilterBlockComponent implements OnInit {

  @Output() searched: EventEmitter<string> = new EventEmitter<string>();

  isSearchActive = false;
  isFilterActive = false;

  isSearchOpen = false;
  query = '';
  constructor() { }

  ngOnInit(): void {
  }

  saveString(query: string): void {
    this.query = query;
  }

  search(): void {
    this.isSearchActive = !!this.query;
    this.searched.emit(this.query);
    this.toggleSearch();
  }

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

}
