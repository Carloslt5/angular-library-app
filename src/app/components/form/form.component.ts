import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BOOK_CATEGORY_ARRAY } from '../../../constants/categories.constants';
import { BookService } from '../../core/services/book.service';
import { UploadService } from '../../core/services/upload.service';
import { Book } from '../../interface/book';

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  bookData = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    link: new FormControl(''),
    categories: new FormControl(''),
    imageURL: new FormControl(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3DlrxkyG-D62QsmOFHoe_pCaaIIVWnItM6NMqtYqTsXNIpdB'
    ),
    year: new FormControl(''),
  });

  bookCategories = BOOK_CATEGORY_ARRAY;

  constructor(
    private fileService: UploadService,
    private bookService: BookService
  ) {}

  uploadImg(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const imagenData = fileInput.files ? fileInput.files[0] : null;
    if (imagenData) {
      const formData = new FormData();
      formData.append('imageData', imagenData);
      this.fileService.uploadImage(formData).subscribe((response) => {
        this.bookData.patchValue({
          imageURL: response.publicUrl,
        });
      });
    }
  }

  sendForm(event: Event) {
    event.preventDefault();
    this.bookService
      .create(this.bookData.value as Partial<Book>)
      .subscribe((response) => {
        console.log('la respuesta', response);
      });
  }
}
