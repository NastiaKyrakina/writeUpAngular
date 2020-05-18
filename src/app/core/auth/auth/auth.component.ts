import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthFormComponent} from "../auth-form/auth-form.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  type = 'login'

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    let dialogRef = this.dialog.open(AuthFormComponent, {
      height: '250px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
