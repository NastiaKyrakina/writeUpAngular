export interface Page {
  name: string;
  link: string;
}

export const Pages: Page[] = [
  {
    name: "Бібліотека",
    link: "books",
  },
  {
    name: "Читальна зала",
    link: "reading",
  },
  {
    name: "Моя полиця",
    link: "users/profile",
  },
  {
    name: "Додати книгу",
    link: "books/add",
  }
]
