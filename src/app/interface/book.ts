export type BookCategories =
  | 'Adventure'
  | 'Biography'
  | 'Classic'
  | 'Drama'
  | 'Dystopian'
  | 'Fantasy'
  | 'Fiction'
  | 'Historical Fiction'
  | 'Historical'
  | 'Horror'
  | 'Humor'
  | 'Mystery'
  | 'Non-fiction'
  | 'Poetry'
  | 'Psychological Suspense'
  | 'Romance'
  | 'Science Fiction'
  | 'Thriller';
export interface Book {
  id: string;
  author: string;
  description: string;
  categories: BookCategories;
  imageURL: string;
  link: string;
  title: string;
  year: number;
}

export interface UploadResponse {
  publicUrl: string;
}

export type BookID = Pick<Book, 'id'>;
