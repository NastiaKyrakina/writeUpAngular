import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IBook, IReview} from "../../../../models/interfaces/books";
import {CommentsService} from "../../../core/servises/comments.service";
import {FormBuilder} from "@angular/forms";
import {AddReviewComponent} from "../add-review/add-review.component";
import {MatDialog} from "@angular/material/dialog";
import {ReviewPageComponent} from "../review-page/review-page.component";
import {ConfirmMessaseComponent} from "../../../core/confirm-messase/confirm-messase.component";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    private snackBar: MatSnackBar,
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

  deleteReview(reviewId: number): void {
    let dialogRef = this.dialog.open(ConfirmMessaseComponent, {
      width: '330px',
      data: {
        header: 'Видалення рецензії',
        text: 'Ви дійсно бажаєте видаліти цю рецензію?',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.commentsService.deleteReview(this.bookId, reviewId);
        this.comments$ =  this.commentsService.reviews;
        setTimeout(() => {
          this.snackBar.open('Рецензію виделено успішнo', 'Закрити', {
            duration: 1000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }, 350);
      }
    });
  }
}
