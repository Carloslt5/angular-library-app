import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadResponse } from '../../interface/book';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadImage(imageData: FormData) {
    return this.http.post<UploadResponse>(
      'http://localhost:5005/api/upload',
      imageData
    );
  }
}
