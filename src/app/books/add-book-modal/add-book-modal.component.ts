import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
