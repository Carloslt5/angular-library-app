import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookID } from '../../interface/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooksList() {
    return this.http.get<Book[]>('http://localhost:5005/api/books');
  }

  getbyID(id: BookID) {
    return this.http.get<Book[]>(`http://localhost:5005/api/books/${id}`);
  }
}
