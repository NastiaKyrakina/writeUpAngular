import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IBook, IReview} from "../../../../models/interfaces/books";
import {CommentsService} from "../../../core/servises/comments.service";
import {FormBuilder} from "@angular/forms";
import {AddReviewComponent} from "../add-review/add-review.component";
import {MatDialog} from "@angular/material/dialog";
import {ReviewPageComponent} from "../review-page/review-page.component";

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit {

  @Input() set book (book: IBook){
    this.bookId = book.id;
    this.fullBook = book;
    this.loadComments();
  };
  @Input() userId: number;

  fullBook: IBook;
  bookId: number;
  comments$: Observable<IReview[]>

  constructor(
    private commentsService: CommentsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  loadComments(): void {
    this.commentsService.getBookReviews(this.bookId);
    this.comments$ =  this.commentsService.reviews;
  }

  showMore(review: IReview) {
    let dialogRef = this.dialog.open(ReviewPageComponent, {
      width: '560px',
      data: {
        book: this.fullBook,
        review: review,
      }
    });
  }
}
