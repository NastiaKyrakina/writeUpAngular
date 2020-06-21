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
import { FilterBlockComponent } from './filter-block/filter-block.component';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularEpubViewerModule} from "angular-epub-viewer";
import {MatTabsModule} from "@angular/material/tabs";
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { CommentComponent } from './comments/comment/comment.component';
import { AddReviewComponent } from './reviews/add-review/add-review.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [BooksListComponent, BookDetailsComponent, AddBookComponent, AddBookModalComponent, BooksSliderComponent, BookCardComponent, FilterBlockComponent, CommentsListComponent, CommentComponent, AddReviewComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MdePopoverModule,
    SharedModule,
    MatIconModule,
    FormsModule,
    AngularEpubViewerModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
  ],
  entryComponents: [
    AddBookModalComponent,
    AddReviewComponent,
  ]
})
export class BooksModule { }
