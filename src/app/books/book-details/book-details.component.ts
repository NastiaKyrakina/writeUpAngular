import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import {IBook} from "../../../models/interfaces/books";
import {BooksService} from "../../core/servises/books.service";
import {log} from "util";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit {
  viewType = 'search-result';
  books$: Observable<Array<IBook>>;

  constructor(
    private booksService: BooksService,
  ) { }

  ngOnInit() {
    this.loadBooks('news');
  }

  loadBooks(type: string): void {
    this.books$ = this.booksService.getBooks();
  }

}
