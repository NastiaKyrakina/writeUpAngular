import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GENRES, IGenre} from "./consts";

@Component({
  selector: 'app-type-select',
  templateUrl: './type-select.component.html',
  styleUrls: ['./type-select.component.scss']
})
export class TypeSelectComponent implements OnInit {

  readonly genresList = [...GENRES];
  @Output() genreListChanged: EventEmitter<IGenre[]> = new EventEmitter<IGenre[]>();

  constructor() { }

  ngOnInit(): void {
    this.genresList.forEach(genre => {
      genre['selected'] = false;
    })
  }

  changeList() {
    console.log(this.genresList);
    this.genreListChanged.emit(this.genresList.filter(genre => genre.selected));
  }
}
