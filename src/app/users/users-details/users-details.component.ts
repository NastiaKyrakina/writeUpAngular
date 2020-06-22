import { Component, OnInit } from '@angular/core';
import {IBook, IUser} from "../../../models/interfaces/books";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {currentUser} from "../../core/servises/user.service";
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
    private route: ActivatedRoute,
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {

    console.log('details')
    this.route.data.subscribe((data) => {
      console.log(data)
      if(data && data.currentUser) {
        this.user = currentUser;
        this.currentUser = true;
        this.loadBooks();
      }
    })
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          console.log(params)
            return of(1);
          }
        )
      )
      .subscribe((book) => {
        // this.user = book;
        //  this.epubViewer.openLink('assets/moby-dick.epub');
      })
  }

  loadBooks(): void {
    this.usersBooks$ = this.booksService.getBooks();
  }

}
