import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser, IWriter} from "../../../models/interfaces/books";
import {GENRES} from "../../shared/type-select/consts";
import {users} from "./user-consts";

export const currentUser = users[0];
export const currentWriter: IWriter = {
  id: 1,
  userId: 1,
  user: currentUser,
  about: 'Вітаю тебе, таємний незнайомець! Я, Анна Квітка, молодий автор з Закарпаття. Я мрію писати історії, які знайдуть відклик у серцях людей. На сторінках моїх книг ти знайдешь таємничих драконів та хоробрих лицарів, магію, кохання та частинку мого рідного краю, очарування якого я, сподіваюся, змогла перенести до нових світів. ',
  slogan: 'Нехай народжуються історії!',
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
