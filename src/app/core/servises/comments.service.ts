import { Injectable } from '@angular/core';
import {comments, reviews} from "./consts";
import {BehaviorSubject, Observable, of} from "rxjs";
import {IBook, IReview, IUser} from "../../../models/interfaces/books";
import {users} from "./user-consts";
import {currentUser} from "./user.service";


@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments = comments;
  reviewsList = reviews;
  constructor() { }
  reviews: BehaviorSubject<IReview[]> = new BehaviorSubject<IReview[]>(this.reviewsList);

  getBookComments(bookId: number): Observable<Array<IReview>> {
    const comments = this.comments.filter(comment => comment.bookId === bookId && comment.type === 'comment');
    comments.forEach(comment => {
      const user = users.find(user => user.id === comment.userId);
      comment.user = user;
    });
    return of(comments);
  }

  getBookReviews(bookId: number): void {
    const comments = this.reviewsList.filter(comment => comment.bookId === bookId);
    comments.forEach(comment => {
      const user = users.find(user => user.id === comment.userId);
      comment.user = user;
    });
    this.reviews.next(comments);
  }

  deleteReview(bookId: number, reviewId: number): void {
    this.reviewsList = this.reviewsList.filter(review => review.id !== reviewId);
    console.log(this.reviewsList);
    this.getBookReviews(bookId);
  }

  addReview(value: {bookId: number; text: string; rate: number; userId: number}): void {
    this.reviewsList.push({
      id: this.reviewsList.length + 1,
      bookId: value.bookId,
      userId: value.userId,
      text: value.text,
      rate: value.rate,
      type: 'review',
      pubDate: '23.06.2020',
    });
    this.getBookReviews(value.bookId);
  }

  addComment(value: {bookId: number; text: string; userId: number}): void {
    this.comments.push({
      id: comments.length + 1,
      bookId: value.bookId,
      userId: value.userId,
      text: value.text,
      type: 'comment',
    });
  }
}
