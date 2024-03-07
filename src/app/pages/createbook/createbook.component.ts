import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, catchError, tap } from 'rxjs';
import { FormComponent } from '../../components/form/form.component';
import { MainContainerComponent } from '../../components/layout/main-container/main-container.component';
import { BookService } from '../../core/services/book.service';
import { ToastService } from '../../core/services/toast.service';
import { Book } from '../../interface/book';
import { ErrorMessage } from '../../interface/http-response';

@Component({
  selector: 'create-page',
  standalone: true,
  imports: [AsyncPipe, MainContainerComponent, FormComponent],
  templateUrl: './createbook.component.html',
})
export class CreatebookComponent {
  errorMessages!: ErrorMessage[];
  constructor(
    private bookService: BookService,
    private router: Router,
    private toastService: ToastService
  ) {}

  sendForm(bookData: Partial<Book>) {
    this.bookService
      .create(bookData)
      .pipe(
        tap((response) => {
          this.toastService.add(response);
          this.router.navigate(['/library']);
        }),
        catchError((error: ErrorMessage[]) => {
          this.errorMessages = error;
          return EMPTY;
        })
      )
      .subscribe();
  }
}
