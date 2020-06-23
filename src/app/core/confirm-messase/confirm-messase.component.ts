import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-messase',
  templateUrl: './confirm-messase.component.html',
  styleUrls: ['./confirm-messase.component.scss']
})

export class ConfirmMessaseComponent implements OnInit {
  header: string;
  text: string;
  constructor(
    private matDialogRef: MatDialogRef<ConfirmMessaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.header = data.header;
    this.text = data.text;
  }

  ngOnInit(): void {}

  closeModal(assepted: boolean) {
    this.matDialogRef.close(assepted);
  }
}
