import { Component, OnInit } from '@angular/core';
import {IBook, IUser, IWriter} from "../../../models/interfaces/books";
import {Observable, of} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {BooksService} from "../../core/servises/books.service";
import {switchMap} from "rxjs/operators";
import {currentUser, currentWriter} from 'src/app/core/servises/user.service';

@Component({
  selector: 'app-wtiter-details',
  templateUrl: './wtiter-details.component.html',
  styleUrls: ['./wtiter-details.component.scss']
})
export class WtiterDetailsComponent implements OnInit {

  user: IWriter;
  usersBooks$: Observable<Array<IBook>>;
  currentUser = false;
  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(() => {
        this.user = currentWriter;
      })
  }

  loadBooks(): void {
    this.usersBooks$ = this.booksService.getBooks();
  }
}
