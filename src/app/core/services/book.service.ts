import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookID } from '../../interface/book';
import { APIResponse } from '../../interface/http-response';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooksList() {
    return this.http.get<Book[]>(environment.apiUrl);
  }

  getbyID(id: BookID) {
    return this.http.get<Book[]>(`${environment.apiUrl}/${id}`);
  }

  create(bookData: Partial<Book>) {
    return this.http.post<APIResponse>(
      `${environment.apiUrl}/create`,
      bookData
    );
  }

  edit(bookData: Partial<Book>, bookID: BookID) {
    return this.http.put<APIResponse>(
      `${environment.apiUrl}/edit/${bookID}`,
      bookData
    );
  }

  deleteByID({ id }: BookID) {
    return this.http.delete(`${environment.apiUrl}/${id}`);
  }
}
