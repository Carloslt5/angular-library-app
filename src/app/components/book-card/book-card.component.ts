import { Component, Input } from '@angular/core';
import { Book } from '../../interface/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'book-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-card.component.html',
})
export class BookCardComponent {
  @Input() bookDetails!: Book;

  constructor() {}
}
