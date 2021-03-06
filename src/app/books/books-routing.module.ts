import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBookComponent} from "./add-book/add-book.component";
import {BooksListComponent} from "./books-list/books-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {PopularBooksComponent} from "./popular-books/popular-books.component";


const routes: Routes = [
  {path: '', component: BooksListComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'add', component: AddBookComponent},
  {path: 'news', component: PopularBooksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
