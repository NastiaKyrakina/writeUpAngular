import { Injectable } from '@angular/core';
import {comments} from "./consts";
import {Observable, of} from "rxjs";
import {IBook, IReview} from "../../../models/interfaces/books";


@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  readonly comments = comments;
  constructor() { }

  getBookComments(bookId: number): Observable<Array<IReview>> {
    const comments = this.comments.filter(comment => comment.bookId === bookId && comment.type === 'comment');
    console.log(comments)
    return of(comments);
  }
}
