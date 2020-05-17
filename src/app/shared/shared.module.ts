import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { StarReviewComponent } from './star-review/star-review.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [UploadFileComponent, StarReviewComponent],
  imports: [
        CommonModule,
        MatIconModule
    ],
  exports: [
    UploadFileComponent,
    StarReviewComponent,
  ]
})
export class SharedModule { }
