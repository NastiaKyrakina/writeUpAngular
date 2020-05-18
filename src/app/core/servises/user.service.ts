import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../../../models/interfaces/books";

export const currentUser = {
  id: 1,
  firstName: 'Вікторія',
  lastName: 'Квітка',
  password: 'test',
  email: 'kvitka@gmail.com'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(currentUser);

  constructor(
  ) {}

  login(email: string, password: string): boolean {
    return email === currentUser.email && password === currentUser.password;
  }

  auth(): void {
    this.user.next(currentUser);
  }

  logout(): void {
    this.user.next(null);
  }
}
