import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book, BookID } from '../../interface/book';

@Component({
  selector: 'book-card-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-card-details.component.html',
})
export class BookCardDetailsComponent {
  @Input() bookDetails!: Book;
  @Output() deleteByID = new EventEmitter<BookID>();

  constructor() {}

  onDelete() {
    this.deleteByID.emit({ id: this.bookDetails.id });
  }
}
