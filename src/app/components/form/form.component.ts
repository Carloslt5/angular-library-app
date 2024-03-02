import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BOOK_CATEGORIE_ARRAY } from '../../../constants/categories.constants';
import { UploadService } from '../../core/services/upload.service';
export interface UploadResponse {
  publicUrl: string;
}

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  bookData = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    link: new FormControl(''),
    categorie: new FormControl(''),
    imageURL: new FormControl({
      publicUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3DlrxkyG-D62QsmOFHoe_pCaaIIVWnItM6NMqtYqTsXNIpdB',
    }),
    year: new FormControl(null),
  });

  bookCategories = BOOK_CATEGORIE_ARRAY;

  constructor(private fileServices: UploadService) {}

  ngOnInit(): void {
    console.log('-------------', this.bookData.value);
  }

  uploadImg(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const imagenData = fileInput.files ? fileInput.files[0] : null;
    if (imagenData) {
      const formData = new FormData();
      formData.append('imageData', imagenData);
      this.fileServices.uploadImage(formData).subscribe((response) => {
        this.bookData.patchValue({
          imageURL: { ...response },
        });
      });
    }
  }

  sendForm(event: Event) {
    event.preventDefault();
    console.log('Formulario enviado:', this.bookData.value);
  }
}
