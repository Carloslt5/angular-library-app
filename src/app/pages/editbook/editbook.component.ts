import { Component, OnInit } from '@angular/core';
import { MainContainerComponent } from '../../components/layout/main-container/main-container.component';
import { FormComponent } from '../../components/form/form.component';
import { Book } from '../../interface/book';

@Component({
  selector: 'app-editbook',
  standalone: true,
  imports: [MainContainerComponent, FormComponent],
  templateUrl: './editbook.component.html',
})
export class EditbookComponent implements OnInit {
  bookDetails!: Book;

  constructor() {}

  ngOnInit() {
    this.bookDetails = history.state.book;
  }

  sendForm(bookData: Partial<Book>) {
    console.log('la data enviada', bookData);
  }
}
