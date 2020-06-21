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



@NgModule({
  declarations: [
    UploadFileComponent,
    StarReviewComponent,
    FilterButtonComponent,
    UserPicComponent,
    TextToColorDirective,
    InitialsPipe,
    TypeSelectComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    UploadFileComponent,
    StarReviewComponent,
    FilterButtonComponent,
    UserPicComponent,
    TypeSelectComponent,
  ]
})
export class SharedModule { }
