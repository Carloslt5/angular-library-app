export enum BookCategories {
  Adventure = 'Adventure',
  Biography = 'Biography',
  Classic = 'Classic',
  Drama = 'Drama',
  Dystopian = 'Dystopian',
  Fantasy = 'Fantasy',
  Fiction = 'Fiction',
  HistoricalFiction = 'Historical Fiction',
  Historical = 'Historical',
  Horror = 'Horror',
  Humor = 'Humor',
  Mystery = 'Mystery',
  NonFiction = 'Non-fiction',
  Poetry = 'Poetry',
  PsychologicalSuspense = 'Psychological Suspense',
  Romance = 'Romance',
  ScienceFiction = 'Science Fiction',
  Thriller = 'Thriller',
}

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
