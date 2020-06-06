import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import {IBook} from "../../../models/interfaces/books";
import {BooksService} from "../../core/servises/books.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit {
  viewType = 'dashboard';
  booksNew$: Observable<Array<IBook>>;
  booksPop$: Observable<Array<IBook>>;
  books$: Observable<Array<IBook>>;

  constructor(
    private booksService: BooksService,
  ) { }

  ngOnInit() {
    this.loadBooks('news');
  }

  loadBooks(type: string): void {
    this.booksNew$ = this.booksService.getBooks();
    this.booksPop$ = this.booksService.getBooks('popular');

  }

  searchBooks(query): void {
    if (!!query) {
      this.books$ = this.booksService.searchBooks(query);
      this.viewType = 'search-result';
    } else {
      this.loadBooks('');
      this.viewType = 'dashboard';
    }

  }

}
