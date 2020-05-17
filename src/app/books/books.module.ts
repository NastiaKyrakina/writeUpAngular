import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddBookModalComponent } from './add-book-modal/add-book-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { BooksSliderComponent } from './books-slider/books-slider.component';
import { BookCardComponent } from './book-card/book-card.component';
import {MdePopoverModule} from "@material-extended/mde";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [BooksListComponent, BookDetailsComponent, AddBookComponent, AddBookModalComponent, BooksSliderComponent, BookCardComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MdePopoverModule,
    SharedModule,
  ],
  entryComponents: [
    AddBookModalComponent,
  ]
})
export class BooksModule { }
