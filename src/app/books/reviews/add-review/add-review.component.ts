import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../core/servises/user.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {IBook} from "../../../../models/interfaces/books";

export interface DialogData {
  book: IBook;
}

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  form: FormGroup;
  book: IBook;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AddReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.book = data.book;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      text: ['', Validators.required],
      mark: ['', Validators.required],
    })
  }

  addReview(): void {

  }

  close() {
    this.matDialogRef.close();
  }
}
