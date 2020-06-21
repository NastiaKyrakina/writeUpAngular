import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../../../core/servises/comments.service";
import {IReview} from "../../../../models/interfaces/books";
import {Observable} from "rxjs";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() set book (bookId: number){
    this.bookId = bookId;
    this.loadComments();
  };
  bookId: number;
  comments$: Observable<IReview[]>

  constructor(
    private commentsService: CommentsService,
  ) { }

  ngOnInit(): void {
  }

  loadComments(): void {
    this.comments$ = this.commentsService.getBookComments(this.bookId);
  }

}
