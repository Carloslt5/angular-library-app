import { Component, OnInit } from '@angular/core';
import { BookService } from '../../core/services/book.service';
import { AsyncPipe } from '@angular/common';
import { Book } from '../../interface/book';
import { Observable } from 'rxjs';
import { MainContainerComponent } from '../../components/layout/main-container/main-container.component';

@Component({
  selector: 'library-page',
  standalone: true,
  imports: [AsyncPipe, MainContainerComponent],
  templateUrl: './library.component.html',
})
export class LibraryComponent implements OnInit {
  public bookList$!: Observable<Book[]>;

  constructor(private services: BookService) {}

  ngOnInit() {
    this.bookList$! = this.services.getBooksList();
  }
}
