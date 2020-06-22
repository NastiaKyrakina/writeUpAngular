import {IUser} from "../../../models/interfaces/books";

export const users: IUser[] = [
  {
    id: 1,
    firstName: 'Вікторія',
    lastName: 'Квітка',
    password: 'test',
    email: 'kvitka@gmail.com',
    phone: '380(96) 90-10-234 ',
    typesIds: [1,6,7],
    avatar: '/assets/logos/user-logo.jpg',
  },
  {
    id: 2,
    firstName: 'Максім',
    lastName: 'Західний',
    password: 'test',
    email: 'maksiWest@gmail.com',
    phone: '380(97) 45-88-123 ',
    typesIds: [8, 7, 1, 2, 19],
    avatar: '/assets/logos/avatar-2.jpg',
  },
  {
    id: 3,
    firstName: 'Валеріан',
    lastName: 'Підгорний',
    password: 'test',
    email: 'UnderWorld1367@gmail.com',
    phone: '380(97) 78-18-345 ',
    typesIds: [6, 1, 11, 12, 17],
    avatar: '/assets/logos/avatar-3.jpeg',
  },
  {
    id: 4,
    firstName: 'Діана',
    lastName: 'Сонячна-Весна',
    password: 'test',
    email: 'sunny@gmail.com',
    phone: '380(99) 12-45-783 ',
    typesIds: [],
    avatar: '/assets/logos/avatar-4.jpg',
  },

];
