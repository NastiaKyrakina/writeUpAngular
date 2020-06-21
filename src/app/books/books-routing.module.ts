import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBookComponent} from "./add-book/add-book.component";
import {BooksListComponent} from "./books-list/books-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";


const routes: Routes = [
  {path: '', component: BooksListComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'add', component: AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
