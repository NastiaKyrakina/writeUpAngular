import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { books, reviews} from "./consts";
import {IBook} from "../../../models/interfaces/books";
import {users} from "./user-consts";
import {GENRES} from "../../shared/type-select/consts";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() {
  }

  getBook(id: number): Observable<IBook> {
    const book = books.find(book => book.id === id);
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
    books.forEach(book => {
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

    return of(books);
  }

  searchBooks(params: {
                query?: string;
                genres?: number[];
                start?: number;
                end?: number;
              }
  ): Observable<Array<IBook>> {
    const resultSearch = [];
    for (let i = 0; i < books.length; i++) {

      const book = books[i];
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
      console.log(params)
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
}
