import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../../../core/servises/comments.service";
import {IReview} from "../../../../models/interfaces/books";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  form: FormGroup;

  @Input() set book (bookId: number){
    this.bookId = bookId;
    this.loadComments();
  };
  @Input() userId: number;
  bookId: number;
  comments$: Observable<IReview[]>

  constructor(
    private commentsService: CommentsService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      text: [''],
    })
  }

  loadComments(): void {
    this.comments$ = this.commentsService.getBookComments(this.bookId);
  }

  addComment() {
    setTimeout( ()=> {
      this.commentsService.addComment({
        bookId: this.bookId,
        userId: this.userId,
        text: this.form.value.text,
      });
      this.comments$ = this.commentsService.getBookComments(this.bookId);
      this.form.patchValue({
        text: '',
      });
      this.form.get('text').markAsPristine();
      this.form.get('text').markAsUntouched();
      this.form.get('text').updateValueAndValidity();
    }, 1000);
  }

}
