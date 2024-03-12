import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadResponse } from '../../interface/book';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadImage(imageData: FormData) {
    return this.http.post<UploadResponse>(
      `${environment.apiUrl}/upload`,
      imageData
    );
  }
}
