import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BOOK_CATEGORY_ARRAY } from '../../../constants/categories.constants';
import { UploadService } from '../../core/services/upload.service';
import { Book } from '../../interface/book';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { ErrorMessage } from '../../pages/createbook/createbook.component';

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    ReactiveFormsModule,
    ErrorMessageComponent,
  ],
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  @Input() bookDetails!: Book;
  @Input() errorMessages!: ErrorMessage[];
  @Input() isEditing: boolean = false;
  @Output() formSubmit = new EventEmitter<Partial<Book>>();
  bookFormData!: FormGroup;
  bookCategories = BOOK_CATEGORY_ARRAY;

  constructor(private fileService: UploadService) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    const formData = {
      title: this.bookDetails?.title ?? 'a',
      author: this.bookDetails?.author ?? 'a',
      link: this.bookDetails?.link ?? 'https://www.google.com',
      categories: this.bookDetails?.categories ?? '',
      imageURL:
        this.bookDetails?.imageURL ??
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3DlrxkyG-D62QsmOFHoe_pCaaIIVWnItM6NMqtYqTsXNIpdB',
      year: this.bookDetails?.year ?? 12,
    };

    this.bookFormData = new FormGroup({
      title: new FormControl(formData.title),
      author: new FormControl(formData.author),
      link: new FormControl(formData.link),
      categories: new FormControl(formData.categories),
      imageURL: new FormControl(formData.imageURL),
      year: new FormControl(formData.year),
    });
  }

  uploadImg(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const imagenData = fileInput.files ? fileInput.files[0] : null;
    if (imagenData) {
      const formData = new FormData();
      formData.append('imageData', imagenData);
      this.fileService.uploadImage(formData).subscribe((response) => {
        this.bookFormData.patchValue({
          imageURL: response.publicUrl,
        });
      });
    }
  }

  sendForm(event: Event) {
    event.preventDefault();
    this.formSubmit.emit(this.bookFormData.value as Partial<Book>);
  }
}
