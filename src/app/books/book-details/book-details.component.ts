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

  searchBooks(query): void {
    if (!!query) {
      this.books$ = this.booksService.searchBooks(query);
      this.viewType = 'search-result';
    } else {
      this.books$ = this.booksService.getBooks();
      this.viewType = 'dashboard';
    }

  }

}
