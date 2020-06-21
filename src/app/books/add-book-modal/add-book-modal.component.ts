import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {IGenre} from "../../shared/type-select/consts";

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookModalComponent implements OnInit {
  file: File;
  genres: IGenre[];
  constructor() { }

  ngOnInit() {
  }

  uploadFile($event: File) {
    this.file = $event;
  }

  updateGenres(genres: IGenre[]) {
    this.genres = genres;
  }
}
