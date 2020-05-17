import {Component, Input, OnInit} from '@angular/core';
import {IBook} from "../../../models/interfaces/books";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: IBook;

  constructor() { }

  ngOnInit() {
  }

}
