import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";
import {MdePopoverModule} from "@material-extended/mde";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdePopoverModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
