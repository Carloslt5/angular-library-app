export interface Book {
  id: string;
  author: string;
  categories: string;
  imageURL: string;
  link: string;
  title: string;
  year: number;
}

export interface UploadResponse {
  publicUrl: string;
}

export type BookID = Pick<Book, 'id'>;
