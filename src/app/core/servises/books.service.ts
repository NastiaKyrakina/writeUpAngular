import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {books, booksPopular} from "./consts";
import {IBook} from "../../../models/interfaces/books";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(type: string = 'new'): Observable<Array<IBook>> {
    if (type === 'new') {
      return of(books);
    } else {
      return of(booksPopular);
    }
  }

  searchBooks(query: string): Observable<Array<IBook>> {
    if (query) {
      query = query.toLowerCase();
      const booksFiltered = [...books, ...booksPopular].filter(book => {
        return book.name.toLowerCase().includes(query) || book.writers[0].name.toLowerCase().includes(query)
      })
      return of(booksFiltered);
    }
    return of([...books, ...booksPopular]);
  }
}
