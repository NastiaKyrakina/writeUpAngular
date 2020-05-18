import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../servises/user.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CreateUserFormComponent>,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],

    })
  }

  createAcc() {
    if (this.form.value.password !== this.form.value.password2) {
      alert('Паролі не співпадають!')
      return;
    }
    if (this.form.valid) {
      alert('Користувача успішно створено!');
      this.matDialogRef.close();
    } else {
      alert('Будь ласка, заповніть форму')
    }
  }

  exit() {
    this.matDialogRef.close();
  }
}
