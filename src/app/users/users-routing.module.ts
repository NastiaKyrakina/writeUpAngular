import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersDetailsComponent} from "./users-details/users-details.component";
import {WtiterDetailsComponent} from "./wtiter-details/wtiter-details.component";

const routes: Routes = [
  {path: 'profile', component: UsersDetailsComponent, data: {currentUser: true}},
  {path: ':id', component: UsersDetailsComponent},
  {path: 'writer/:id', component: WtiterDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
