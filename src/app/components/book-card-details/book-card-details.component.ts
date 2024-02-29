import { Component, Input } from '@angular/core';
import { Book } from '../../interface/book';

@Component({
  selector: 'book-card-details',
  standalone: true,
  imports: [],
  templateUrl: './book-card-details.component.html',
})
export class BookCardDetailsComponent {
  @Input() bookDetails!: Book;

  constructor() {}
}
