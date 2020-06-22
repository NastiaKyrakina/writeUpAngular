import { Component, OnInit } from '@angular/core';
import {UserService} from "../servises/user.service";
import {IUser} from "../../../models/interfaces/books";
import {Observable} from "rxjs";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  user$: Observable<IUser>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user$ = this.userService.user;
  }

  logout(): void {
    this.userService.logout();
  }

}
