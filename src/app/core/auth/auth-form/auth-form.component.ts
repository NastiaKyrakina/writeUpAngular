import { Component, OnInit } from '@angular/core';
import {UserService} from "../../servises/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CreateUserFormComponent} from "../create-user-form/create-user-form.component";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AuthFormComponent>,
    private dialog: MatDialog,
    )
  {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }


  create(): void {
    let dialogRef = this.dialog.open(CreateUserFormComponent, {
      height: '600px',
      width: '400px',
    });
  }

  login(): void {
    if (this.userService.login(this.form.value.email, this.form.value.password)) {
      this.userService.auth();
      this.matDialogRef.close();
    } else {
      alert('Невірний логін або пароль')
    }
  }
}
