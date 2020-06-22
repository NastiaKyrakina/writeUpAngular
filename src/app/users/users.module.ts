import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { WtiterDetailsComponent } from './wtiter-details/wtiter-details.component';
import {MatIconModule} from "@angular/material/icon";
import {MdePopoverModule} from "@material-extended/mde";
import {UsersRoutingModule} from "./users-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {BooksModule} from "../books/books.module";



@NgModule({
  declarations: [UsersDetailsComponent, WtiterDetailsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MdePopoverModule,
    UsersRoutingModule,
    MatButtonModule,
    BooksModule,
  ]
})
export class UsersModule { }
