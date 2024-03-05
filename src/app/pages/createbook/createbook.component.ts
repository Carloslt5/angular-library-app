import { Component } from '@angular/core';
import { MainContainerComponent } from '../../components/layout/main-container/main-container.component';
import { FormComponent } from '../../components/form/form.component';
import { BookService } from '../../core/services/book.service';
import { Book } from '../../interface/book';
import { Router } from '@angular/router';

@Component({
  selector: 'create-page',
  standalone: true,
  imports: [MainContainerComponent, FormComponent],
  templateUrl: './createbook.component.html',
})
export class CreatebookComponent {
  constructor(private bookService: BookService, private router: Router) {}

  sendForm(bookData: Partial<Book>) {
    console.log('create', bookData);
    this.bookService.create(bookData).subscribe((response) => {
      console.log('la respuesta', response);
      this.router.navigate(['/library']);
    });
  }
}
