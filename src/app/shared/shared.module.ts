import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { StarReviewComponent } from './star-review/star-review.component';
import {MatIconModule} from "@angular/material/icon";
import { FilterButtonComponent } from './filter-button/filter-button.component';



@NgModule({
  declarations: [UploadFileComponent, StarReviewComponent, FilterButtonComponent],
  imports: [
        CommonModule,
        MatIconModule
    ],
  exports: [
    UploadFileComponent,
    StarReviewComponent,
    FilterButtonComponent,
  ]
})
export class SharedModule { }
