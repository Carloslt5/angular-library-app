import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { MainContainerComponent } from '../../components/layout/main-container/main-container.component';
import { BookService } from '../../core/services/book.service';
import { Book } from '../../interface/book';

@Component({
  selector: 'library-page',
  standalone: true,
  imports: [AsyncPipe, MainContainerComponent, BookCardComponent, RouterLink],
  templateUrl: './library.component.html',
})
export class LibraryComponent implements OnInit {
  public bookList$!: Observable<Book[]>;

  constructor(private bookDervices: BookService) {}

  ngOnInit() {
    this.bookList$ = this.bookDervices.getBooksList();
  }
}
