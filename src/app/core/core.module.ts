import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {AppRoutingModule} from "../app-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { UserPicComponent } from './user-pic/user-pic.component';
import { TextToColorDirective } from './directives/text-to-color.directive';
import { InitialsPipe } from './pipe/initials.pipe';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthFormComponent } from './auth/auth-form/auth-form.component';
import { CreateUserFormComponent } from './auth/create-user-form/create-user-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import { ConfirmMessaseComponent } from './confirm-messase/confirm-messase.component';


@NgModule({
  declarations: [MainMenuComponent, TopMenuComponent, UserPicComponent, TextToColorDirective, InitialsPipe, AuthComponent, AuthFormComponent, CreateUserFormComponent, ConfirmMessaseComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [
    MainMenuComponent,
    TopMenuComponent,
    AuthComponent,
  ],
  entryComponents: [
    MainMenuComponent,
    AuthFormComponent,
    CreateUserFormComponent,
  ]
})
export class CoreModule { }
