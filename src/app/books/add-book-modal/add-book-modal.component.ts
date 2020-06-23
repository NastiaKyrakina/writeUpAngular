import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {IGenre} from "../../shared/type-select/consts";
import {UserService} from "../../core/servises/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../reviews/add-review/add-review.component";
import {IBook, ITypes, IUser, IWriter} from "../../../models/interfaces/books";
import {Route, Router} from "@angular/router";
import {Observable} from "rxjs";
import {BooksService} from "../../core/servises/books.service";

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
  currentUser$: Observable<IUser>;
  users: IUser[] = [];
  bookFile: File[];

  constructor(
    private userService: UserService,
    private bookService: BooksService,
    private fb: FormBuilder,
    private usersService: UserService,
    private matDialogRef: MatDialogRef<AddBookModalComponent>,
    private route: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.book = data ? data.book : null;
  }

  ngOnInit() {
    this.currentUser$ = this.usersService.user;
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

  updateUsers(users: IUser[]) {
    this.users = users;
  }

  closeModal() {
    this.matDialogRef.close();
    this.route.navigateByUrl('/books');
  }

  addBook(userId: number) {
    const typesIds = this.genres.map(genre => genre.id);
    const userIds = this.users.map(user => user.id);

    const values = this.form.value;
    if (!this.book) {

      this.bookService.addBook({
        writersIds: [userId, ...userIds],
        typesIds: typesIds,
        fileLink: 'assets/fire/fire.epub',
        cover: this.imageLink ? '/assets/mock/c8.jpg' : '/assets/mock/default.png',
        ...values,
      }).subscribe(id => {
        this.matDialogRef.close();
        this.route.navigateByUrl(`/books/books/${id}` );
      })
    } else {
      this.bookService.updateBook({
        ...this.book,
        typesIds: typesIds,
        ...values,
      }).subscribe(id => {
        this.matDialogRef.close();
        this.route.navigateByUrl(`/books/books/${id}` );
      })
    }
  }


  uploadBook($event: Event) {
    const filesFromEvent = [].slice.call(event.target['files']);
    if (event.target['files'][0]) {
      this.bookFile = filesFromEvent[0];
    }
  }
}
