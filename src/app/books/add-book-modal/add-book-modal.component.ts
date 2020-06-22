import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {IGenre} from "../../shared/type-select/consts";
import {UserService} from "../../core/servises/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../reviews/add-review/add-review.component";
import {IBook, ITypes, IWriter} from "../../../models/interfaces/books";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBookModalComponent implements OnInit {
  file: File;
  genres: IGenre[] = [];
  book: IBook;
  imageLink: any;
  form: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AddBookModalComponent>,
    private route: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.book = data ? data.book : null;
  }

  ngOnInit() {
    if (this.book) {
      this.form = this.fb.group({
        name: [this.book.name ? this.book.name : '', Validators.required],
        annotation: [this.book.annotation ? this.book.annotation : '', Validators.required],
        type: [this.book.type, Validators.required],
        ageLimitation: [this.book.ageLimitation, Validators.required],
      })
      this.genres = this.book.types;
      this.imageLink = this.book.cover;
    } else {
      this.form = this.fb.group({
        name: ['', Validators.required],
        annotation: ['', Validators.required],
        type: [1, Validators.required],
        ageLimitation: [0, Validators.required],
      })
    }
  }

  uploadFile($event: File) {
    this.file = $event;
  }

  updateGenres(genres: IGenre[]) {
    this.genres = genres;
  }

  closeModal() {
    this.matDialogRef.close();
    this.route.navigateByUrl('/books');
  }

  addBook() {}


}
