import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IBook} from "../../../models/interfaces/books";
import {BooksService} from "../../core/servises/books.service";

@Component({
  selector: 'app-popular-books',
  templateUrl: './popular-books.component.html',
  styleUrls: ['./popular-books.component.scss']
})
export class PopularBooksComponent implements OnInit {

  booksNew$: Observable<Array<IBook>>;
  booksPop$: Observable<Array<IBook>>;

  constructor(
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.booksNew$ = this.booksService.getNewBooks();
    this.booksPop$ = this.booksService.getPopularBooks();
  }

}
