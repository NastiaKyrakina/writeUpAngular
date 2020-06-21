import {IBook, IReview} from "../../../models/interfaces/books";

export const TYPES_NAMES = {
  1: 'Роман',
  2: 'Збірник поезії',
}

export const book: IBook = {
  id: 1,
  name: 'Дівчина Онлайн',
  writers: [
    {
      id: 1,
      name: 'Зої Загг',
    },
  ],
  types: [
    {
      id: 1,
      name: 'фантастика',
    },
    {
      id: 2,
      name: 'горор',
    },
    {
      id: 2,
      name: 'пригоди',
    },
  ],
  cover: '/assets/mock/cover1.png',
  stars: 9.8,
  starsCount: 49,
  pubDate: "5 травня 2020р.",
  annotation: "Я, Анна Квітка, молодий автор з Закарпаття. Я мрію писати історії, які знайдуть відклик у серцях людей. На сторінках моїх книг ти знайдешь таємничих драконів та хоробрих лицарів, магію, кохання та частинку мого рідного краю, очарування якого я, сподіваюся, змогла перенести до нових світів. ",
  fileLink: '',
  ageLimitation: 12,
  type: 1,
}

export const books: IBook[] = [
  {
    name: 'Дівчина Онлайн',
    writers: [
      {
        id: 1,
        name: 'Зої Загг',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/cover1.png',
    stars: 5,
  },
  {
    name: 'Відьмак',
    writers: [
      {
        id: 1,
        name: 'Анджей Сапковский',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/cover2.jpg',
    stars: 5,
  },
  {
    name: 'Тоторо',
    writers: [
      {
        id: 1,
        name: 'Міядзаки',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/cover3.jpeg',
    stars: 5,
  },
  {
    name: 'Вогонь',
    writers: [
      {
        id: 1,
        name: 'Анна Лі',
      },
      {
        id: 1,
        name: 'Майкл Артур',
      },
      {
        id: 1,
        name: 'Діана Кодак',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/cover4.jpg',
    stars: 5,
  },
  {
    name: 'Шлях самурая',
    writers: [
      {
        id: 1,
        name: 'Зої Загг',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/cover5.jpg',
    stars: 5,
  },{
    name: 'Шлях самурая',
    writers: [
      {
        id: 1,
        name: 'Зої Загг',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/cover5.jpg',
    stars: 5,
  },
  {
    name: 'Дівчина Онлайн 2',
    writers: [
      {
        id: 1,
        name: 'Зої Загг',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/cover1.png',
    stars: 5,
  }
];


export const booksPopular: IBook[] = [
  {
    name: 'Загадки Світу',
    writers: [
      {
        id: 1,
        name: 'Анна Льюіс',
      },
      {
        id: 1,
        name: 'Максім Мартинін',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/c1.jpeg',
    stars: 5,
  },
  {
    name: 'Мір без тебе',
    writers: [
      {
        id: 1,
        name: 'Зої Загг',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/c2.jpg',
    stars: 5,
  },
  {
    name: 'Антікваріат',
    writers: [
      {
        id: 1,
        name: 'Зої Загг',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/c3.jpg',
    stars: 5,
  },
  {
    name: 'ЯнгОлд',
    writers: [
      {
        id: 1,
        name: 'Зої Загг',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/c4.jpg',
    stars: 5,
  },
  {
    name: 'Сім чудес',
    writers: [
      {
        id: 1,
        name: 'Зої Загг',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/c5.jpg',
    stars: 5,
  },{
    name: 'Апельсини',
    writers: [
      {
        id: 1,
        name: 'Зої Загг',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/c6.jpg',
    stars: 5,
  },
  {
    name: 'Азбука та Ми',
    writers: [
      {
        id: 1,
        name: 'Зої Загг',
      },
    ],
    types: [
      {
        id: 1,
        name: 'фантастика',
      },
      {
        id: 2,
        name: 'горор',
      },
      {
        id: 2,
        name: 'пригоди',
      },
    ],
    cover: '/assets/mock/c7.jpg',
    stars: 5,
  }
]

export const comments: Array<IReview> = [
  {
    bookId: 1,
    user: {
      lastName: 'Anna',
      firstName: 'Last',
      avatar: '/assets/user-logo.jpg',
    },
    text: 'Подобається',
    type: 'comment'
  },
  {
    bookId: 1,
    user: {
      lastName: 'Anna',
      firstName: 'Last',
      avatar: '/assets/user-logo.jpg',
    },
    text: 'Подобається',
    type: 'comment'
  },
  {
    bookId: 1,
    user: {
      lastName: 'Anna',
      firstName: 'Last',
      avatar: '/assets/user-logo.jpg',
    },
    text: 'Подобається232323v Подобається232323v Подобається232323v Подобається232323v Подобається232323v Подобається232323v',
    type: 'comment'
  },
];

