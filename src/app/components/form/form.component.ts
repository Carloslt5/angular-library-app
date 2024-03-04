import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BOOK_CATEGORY_ARRAY } from '../../../constants/categories.constants';
import { Book } from '../../interface/book';
import { UploadService } from '../../core/services/upload.service';

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
    link: new FormControl('https://www.google.com'),
    categories: new FormControl(''),
    imageURL: new FormControl(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3DlrxkyG-D62QsmOFHoe_pCaaIIVWnItM6NMqtYqTsXNIpdB'
    ),
    year: new FormControl(''),
  });
  bookCategories = BOOK_CATEGORY_ARRAY;

  @Output() formSubmit = new EventEmitter<Partial<Book>>();

  constructor(private fileService: UploadService) {}

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
    this.formSubmit.emit(this.bookData.value as Partial<Book>);
  }
}
