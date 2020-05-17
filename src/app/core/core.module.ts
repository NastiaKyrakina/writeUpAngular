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


@NgModule({
  declarations: [MainMenuComponent, TopMenuComponent, UserPicComponent, TextToColorDirective, InitialsPipe],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    MainMenuComponent,
    TopMenuComponent,
  ],
  entryComponents: [
    MainMenuComponent,

  ]
})
export class CoreModule { }
