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
}
