import {Component, OnInit} from '@angular/core';
import {UserService} from "./core/servises/user.service";
import {BehaviorSubject} from "rxjs";
import {IUser} from "../models/interfaces/books";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'write-up-app';
  user: IUser = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user.subscribe(
      (user) => {
        this.user = user;
      })
  }
}
