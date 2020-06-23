import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GENRES, IGenre} from "../type-select/consts";
import {users} from "../../core/servises/user-consts";
import {IUser} from "../../../models/interfaces/books";

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent implements OnInit {

  readonly genresList = [...users];
  @Output() userListChanged: EventEmitter<IUser[]> = new EventEmitter<IUser[]>();

  constructor() { }

  ngOnInit(): void {
    this.genresList.forEach(genre => {
      genre['selected'] = false;
    })
  }

  changeList() {
    console.log(this.genresList);
    this.userListChanged.emit(this.genresList.filter(genre => genre.selected));
  }

}
