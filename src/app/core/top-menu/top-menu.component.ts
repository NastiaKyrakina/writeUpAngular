import { Component, OnInit } from '@angular/core';
import {UserService} from "../servises/user.service";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logout(): void {
    this.userService.logout();
  }

}
