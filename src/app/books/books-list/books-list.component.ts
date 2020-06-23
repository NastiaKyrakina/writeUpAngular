import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {IBook} from "../../../models/interfaces/books";
import {
  AngularEpubViewerComponent,
  EpubChapter, EpubError,
  EpubLocation,
  EpubMetadata,
  EpubPage,
  EpubSearchResult
} from "angular-epub-viewer";
import {BooksService} from "../../core/servises/books.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListComponent implements OnInit {

  viewType = 'search-result';
  booksNew$: Observable<Array<IBook>>;
  booksPop$: Observable<Array<IBook>>;
  books$: Observable<Array<IBook>>;
  fileSelected = false;
  query = '';
  genres = [];
  startYear: number = null;
  endYear: number = null;


  constructor(
    private booksService: BooksService,
  ) { }

  ngOnInit() {
    this.searchBooks();
  }

  loadBooks(type: string): void {
    this.searchBooks();
    // this.booksNew$ = this.booksService.getBooks();
    // this.booksPop$ = this.booksService.getBooks('popular');
  }

  searchBooks(): void {
    this.books$ = this.booksService.searchBooks({
      query: this.query,
      genres: this.genres,
      end: this.endYear,
      start: this.startYear,
    });
  }

  searchBooksByGenre(types: number[]): void {
    this.genres = types;
    this.searchBooks();
  }

  searchBooksByYears(diap: {start: number; end: number }): void {
    this.startYear = diap.start;
    this.endYear = diap.end;
    this.searchBooks();
  }

  searchBooksByQuery(query: string): void {
    this.query = query;
    this.searchBooks();
  }
}
