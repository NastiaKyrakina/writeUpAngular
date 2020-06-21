import {Component, Input, OnInit} from '@angular/core';
import {IReview} from "../../../../models/interfaces/books";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: IReview;

  constructor() { }

  ngOnInit(): void {
  }

}
