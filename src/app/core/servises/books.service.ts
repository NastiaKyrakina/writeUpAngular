import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {books} from "./consts";
import {IBook} from "../../../models/interfaces/books";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(): Observable<Array<IBook>> {
    return of(books);
  }

  searchBooks(query: string): Observable<Array<IBook>> {
    if (query) {
      query = query.toLowerCase();
      const booksFiltered = books.filter(book => {
        console.log(book.name);
        console.log( book.name.includes(query));
        return book.name.toLowerCase().includes(query) || book.writers[0].name.toLowerCase().includes(query)
      })
      return of(booksFiltered);
    }
    return of(books);
  }
}
