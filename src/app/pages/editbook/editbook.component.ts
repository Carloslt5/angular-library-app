import { Component, OnInit, Input } from '@angular/core';
import { MainContainerComponent } from '../../components/layout/main-container/main-container.component';
import { FormComponent } from '../../components/form/form.component';
import { Book, BookID } from '../../interface/book';
import { BookService } from '../../core/services/book.service';
import { Router } from '@angular/router';
import { EMPTY, catchError, tap } from 'rxjs';
import { ErrorMessage } from '../createbook/createbook.component';

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
  constructor(private bookServices: BookService, private router: Router) {}

  ngOnInit() {
    this.bookDetails = history.state.book;
  }

  sendForm(bookData: Partial<Book>) {
    this.bookServices
      .edit(bookData, this.bookID)
      .pipe(
        tap(() => {
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
