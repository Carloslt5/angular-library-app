import { Component, Input } from '@angular/core';
import { Book } from '../../interface/book';

@Component({
  selector: 'book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
})
export class BookCardComponent {
  @Input() bookDetails!: Book;
  constructor() {}
}
