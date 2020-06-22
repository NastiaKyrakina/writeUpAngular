import {IGenre} from "../../app/shared/type-select/consts";

export interface IBook {
  id?: number;
  name: string;
  writers?: Array<IUser>;
  writersIds: number[];
  types?: Array<ITypes>;
  typesIds: number[];
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
  id?: number;
  userId: number;
  user: IUser;
  about: string;
  slogan: string;
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
  phone?: string,
  avatar?:string;
  reviewsCount?: number;
  types?: IGenre[];
  typesIds?: number[];
  hasBooks?: boolean;
}

export interface IReview {
  id?:number;
  bookId: number,
  userId: number,
  user?: IUser,
  text: string,
  rate?: number,
  pubDate?: string,
  type: 'comment' | 'review';
}
