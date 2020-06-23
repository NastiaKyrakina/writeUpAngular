import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  @Input() imageLink: any;
  @Input() set types(types: string | string[]) {
    if (Array.isArray(types)) {
      this.typesList = types;
      this.typesString = types.toString();
    } else {
      this.typesString = types;
      this.typesList = types.split(',');
    }
  }
  @Output() uploadedFiles = new EventEmitter<File>();

  isDragOver = false;
  typesString: string;
  typesList: string[];
  imagePath: any;

  constructor(private cdr: ChangeDetectorRef) {
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    this.uploadFiles(Array.from(event.dataTransfer.files));
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  upload(event: Event): void {
    const filesFromEvent = [].slice.call(event.target['files']);
    if (event.target['files'][0]) {
      this.uploadFiles(filesFromEvent);
      event.target['value'] = null;
      return;
    }
  }

  uploadFiles(files: File[]): void {
    if (files.length === 0)
      return;

    this.uploadedFiles.next(files[0]);

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      console.log('dond match')
      // this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageLink = reader.result;
      this.cdr.detectChanges();
    }
  }

  delete() {
    this.uploadedFiles.next(null);
    this.imageLink = null;
  }
}
