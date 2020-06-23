import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { StarReviewComponent } from './star-review/star-review.component';
import {MatIconModule} from "@angular/material/icon";
import { FilterButtonComponent } from './filter-button/filter-button.component';
import {UserPicComponent} from "./user-pic/user-pic.component";
import {TextToColorDirective} from "./directives/text-to-color.directive";
import {InitialsPipe} from "./pipe/initials.pipe";
import {MatTooltipModule} from "@angular/material/tooltip";
import { TypeSelectComponent } from './type-select/type-select.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import { UkrDatesPipe } from './pipe/ukr-dates.pipe';
import {ConfirmMessaseComponent} from "../core/confirm-messase/confirm-messase.component";
import {MatButtonModule} from "@angular/material/button";
import { UserSelectComponent } from './user-select/user-select.component';



@NgModule({
  declarations: [
    UploadFileComponent,
    StarReviewComponent,
    FilterButtonComponent,
    UserPicComponent,
    TextToColorDirective,
    InitialsPipe,
    TypeSelectComponent,
    UkrDatesPipe,
    ConfirmMessaseComponent,
    UserSelectComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    UploadFileComponent,
    StarReviewComponent,
    FilterButtonComponent,
    UserPicComponent,
    TypeSelectComponent,
    UserSelectComponent,
  ],
  entryComponents: [
    ConfirmMessaseComponent,
  ]
})
export class SharedModule { }
