import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GENRES} from "../../shared/type-select/consts";
import {MatSelectChange} from "@angular/material/select";
import {$e} from "codelyzer/angular/styles/chars";
import {log} from "util";

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss']
})
export class FilterBlockComponent implements OnInit {
  readonly GENRES = GENRES;

  @Output() searched: EventEmitter<string> = new EventEmitter<string>();
  @Output() genresSelected: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output() yearsSelected: EventEmitter<{start: number; end: number }> = new EventEmitter<{start: number; end: number}>();

  isSearchActive = false;
  isFilterActive = false;

  isSearchOpen = false;
  query = '';

  minSelectedYear = 2000;
  maxSelectedYear = 2020;
  yearsArray = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 2000; i <= 2020 ; i++) {
      this.yearsArray.push(i);
    }
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

  selectGenre($event: MatSelectChange) {
    this.isFilterActive = !!$event.value.length;
    this.genresSelected.emit($event.value)
  }

  minYearSelect(year: number) {
    this.yearsSelected.emit({start: year, end: this.maxSelectedYear});
  }

  maxYearSelect(year: number) {
    this.yearsSelected.emit({start: this.minSelectedYear, end: year});
  }

  resetSearch() {
    this.isSearchActive =  false;
    this.query = '';
    this.searched.emit('');
  }

  resetFilters() {
    this.isFilterActive = false;
    this.yearsSelected.emit({start: null, end: null});
    this.genresSelected.emit([]);
  }
}
