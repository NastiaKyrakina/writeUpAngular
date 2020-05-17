import {Component, Input, OnInit} from '@angular/core';
import {IBook} from "../../../models/interfaces/books";

@Component({
  selector: 'app-books-slider',
  templateUrl: './books-slider.component.html',
  styleUrls: ['./books-slider.component.scss']
})
export class BooksSliderComponent implements OnInit {

  @Input() books: IBook[];

  constructor() { }

  ngOnInit() {
  }

}
