import { Component, OnInit } from '@angular/core';
import {IBook, IUser} from "../../../models/interfaces/books";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {currentUser, UserService} from "../../core/servises/user.service";
import {BooksService} from "../../core/servises/books.service";

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  user: IUser;
  usersBooks$: Observable<Array<IBook>>;
  currentUser = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if(data && data.currentUser) {
        this.user = currentUser;
        this.currentUser = true;
        this.loadBooks();
      }
    })
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.user = this.userService.getUser(+params.get('id'));
      })
  }

  loadBooks(): void {
    this.usersBooks$ = this.booksService.getBooks();
  }

}
