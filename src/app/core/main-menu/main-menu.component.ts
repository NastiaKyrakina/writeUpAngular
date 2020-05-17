import { Component, OnInit } from '@angular/core';
import {Pages} from "./consts";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  readonly pages = Pages;
  constructor() { }

  ngOnInit() {
  }

}
