import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IBook, IReview, IUser} from "../../../../models/interfaces/books";
import {UserService} from "../../../core/servises/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  book: IBook;
  review: IReview;
}

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {

  book: IBook;
  review: IReview;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<ReviewPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.book = data.book;
    this.review = data.review;
  }

  ngOnInit(): void {

  }

  close() {
    this.matDialogRef.close();
  }

}
