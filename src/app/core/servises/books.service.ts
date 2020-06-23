import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { books, reviews} from "./consts";
import {IBook} from "../../../models/interfaces/books";
import {users} from "./user-consts";
import {GENRES} from "../../shared/type-select/consts";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books = books;
  constructor() {
  }

  deleteBook(bookId: number): void {
    this.books = this.books.filter(book => book.id !== bookId)
  }

  addBook(book: IBook): Observable<number> {
    const id: number =  this.books.length + 1;
    this.books .push({
        id,
        ...book,
      });
      return of(id)
  }

  updateBook(book1: IBook): Observable<number> {
    const bookForUpdate = this.books.find(book => book.id == book1.id);
    console.log(bookForUpdate);
    if (bookForUpdate) {
      bookForUpdate.name = book1.name;
      bookForUpdate.annotation = book1.annotation;
      bookForUpdate.ageLimitation = book1.ageLimitation;
      bookForUpdate.type = book1.type;
      bookForUpdate.typesIds = book1.typesIds;
    }
    return of (book1.id);
  }

  getBook(id: number): Observable<IBook> {
    const book = this.books.find(book => book.id === id);
    const writers = users.filter(user => book.writersIds.includes(user.id));
    const types = GENRES.filter(types => book.typesIds.includes(types.id));
    let bookReviews = reviews.filter(review => review.bookId == id);
    let reviewsMarks = {};
    bookReviews.forEach(review => {
      reviewsMarks[review.userId] = review.rate;
    });
    let mark = +Object.values(reviewsMarks).reduce((all: number, item: number) => {
      return all + item;
    }, 0)
    book.writers = writers;
    book.types = types;
    book.starsCount = Object.values(reviewsMarks).length;
    book.stars = book.starsCount ? mark / book.starsCount : 0;
    return of(book);
  }

  getBooks(type: string = 'new'): Observable<Array<IBook>> {
    this.books.forEach(book => {
      const writers = users.filter(user => book.writersIds.includes(user.id));
      const types = GENRES.filter(types => book.typesIds.includes(types.id));
      let bookReviews = reviews.filter(review => review.bookId == book.id);
      let reviewsMarks = {};
      bookReviews.forEach(review => {
        reviewsMarks[review.userId] = review.rate;
      });
      let mark = +Object.values(reviewsMarks).reduce((all: number, item: number) => {
        return all + item;
      }, 0)
      book.writers = writers;
      book.types = types;
      book.starsCount = Object.values(reviewsMarks).length;
      book.stars = book.starsCount ? mark / book.starsCount : 0;
    });

    return of(this.books);
  }

  searchBooks(params: {
                query?: string;
                genres?: number[];
                start?: number;
                end?: number;
              }
  ): Observable<Array<IBook>> {
    const resultSearch = [];
    for (let i = 0; i < this.books.length; i++) {

      const book = this.books[i];
      const writers = users.filter(user => book.writersIds.includes(user.id));

      if (params.query) {
        params.query = params.query.toLowerCase();
        const filtered = writers.filter(writer => writer.firstName.toLowerCase().includes(params.query) || writer.lastName.toLowerCase().includes(params.query));
        if (!(book.name.toLowerCase().includes(params.query) || filtered.length)) {
          continue;
        }
      }

      const types = GENRES.filter(types => book.typesIds.includes(types.id));
      if (params.genres && params.genres.length) {
        const filteredTypes = types.filter(type => params.genres.includes(type.id));
        if (!filteredTypes.length) {
          continue;
        }
      }

      if (params.start && params.end) {
        const pubDateYear = new Date(book.pubDate).getFullYear();
        if (!(pubDateYear >= params.start && pubDateYear <= params.end)) {
          continue;
        }
      }

      let bookReviews = reviews.filter(review => review.bookId == book.id);
      let reviewsMarks = {};

      bookReviews.forEach(review => {
        reviewsMarks[review.userId] = review.rate;
      });

      let mark = +Object.values(reviewsMarks).reduce((all: number, item: number) => {
        return all + item;
      }, 0)
      book.writers = writers;
      book.types = types;
      book.starsCount = Object.values(reviewsMarks).length;
      book.stars = book.starsCount ? mark / book.starsCount : 0;
      resultSearch.push(book);
    }
    return of(resultSearch);
  }

  getPopularBooks(): Observable<Array<IBook>> {
    return this.getBooks()
      .pipe(
        map((books) => {
          books.sort((book1,book2) => {
            return book2.stars - book1.stars;
          });
          console.log(books);
          return books.slice(0, 5);
        })
      );
  }

  getNewBooks(): Observable<Array<IBook>> {
    return this.getBooks()
      .pipe(
        map((books) => {
          books.sort((book1,book2) => {
            return new Date(book1.pubDate).getMilliseconds() -  new Date(book2.stars).getMilliseconds();
          });
          return books.slice(0, 5);
        })
      );
  }
}
