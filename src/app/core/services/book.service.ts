import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookID } from '../../interface/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseURL = 'http://localhost:5005/api/books';
  constructor(private http: HttpClient) {}

  getBooksList() {
    return this.http.get<Book[]>(this.baseURL);
  }

  getbyID(id: BookID) {
    return this.http.get<Book[]>(`${this.baseURL}/${id}`);
  }

  create(bookData: Partial<Book>) {
    return this.http.post(`${this.baseURL}/create`, bookData);
  }

  edit(bookData: Partial<Book>, bookID: BookID) {
    return this.http.put(`${this.baseURL}/edit/${bookID}`, bookData);
  }

  deleteByID({ id }: BookID) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
