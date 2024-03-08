import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, catchError, tap } from 'rxjs';
import { FormComponent } from '../../components/form/form.component';
import { MainContainerComponent } from '../../components/layout/main-container/main-container.component';
import { BookService } from '../../core/services/book.service';
import { ToastService } from '../../core/services/toast.service';
import { Book, BookID } from '../../interface/book';
import { ErrorMessage } from '../../interface/http-response';

@Component({
  selector: 'app-editbook',
  standalone: true,
  imports: [MainContainerComponent, FormComponent],
  templateUrl: './editbook.component.html',
})
export class EditbookComponent implements OnInit {
  @Input('id') bookID!: BookID;
  bookDetails!: Book;
  isEditing: boolean = true;
  errorMessages!: ErrorMessage[];
  constructor(
    private bookServices: BookService,
    private router: Router,
    private toastServices: ToastService
  ) {}

  ngOnInit() {
    this.bookDetails = history.state.book;
  }

  sendForm(bookData: Partial<Book>) {
    this.bookServices
      .edit(bookData, this.bookID)
      .pipe(
        tap((response) => {
          this.toastServices.add(response);
          this.router.navigate([`/library/${this.bookID}`]);
        }),
        catchError((error: ErrorMessage[]) => {
          this.errorMessages = error;
          return EMPTY;
        })
      )
      .subscribe();
  }
}
