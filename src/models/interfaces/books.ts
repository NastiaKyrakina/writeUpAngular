export interface IBook {
  id?: number;
  name: string;
  writers: Array<IWriter>;
  types: Array<ITypes>;
  cover?: string;
  stars?: number;
  starsCount?: number;
  pubDate?: string;
  annotation?: string;
  fileLink?: string;
  ageLimitation?: number
  type?: number;
}

export interface IWriter {
  id: number;
  name: string
}

export interface ITypes {
  id: number;
  name: string
}

export interface IUser {
  id?: number;
  firstName: string,
  lastName: string,
  password?: string,
  email?: string,
  avatar?:string;
}

export interface IReview {
  bookId: number,
  user: IUser,
  text: string,
  rate?: number,
  pubDate?: string,
  type: 'comment' | 'review';
}
