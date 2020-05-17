import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddBookModalComponent} from "../add-book-modal/add-book-modal.component";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    let dialogRef = this.dialog.open(AddBookModalComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

}
