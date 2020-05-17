export interface IBook {
  name: string;
  writers: Array<IWriter>;
  types: Array<ITypes>;
  cover?: string;
  stars?: number;
}

export interface IWriter {
  id: number;
  name: string
}

export interface ITypes {
  id: number;
  name: string
}
