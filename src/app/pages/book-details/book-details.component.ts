import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../../core/services/book.service';
import { Observable } from 'rxjs';
import { Book, BookID } from '../../interface/book';
import { AsyncPipe } from '@angular/common';
import { BookCardDetailsComponent } from '../../components/book-card-details/book-card-details.component';
import { MainContainerComponent } from '../../components/layout/main-container/main-container.component';

@Component({
  selector: 'book-details-page',
  standalone: true,
  imports: [AsyncPipe, MainContainerComponent, BookCardDetailsComponent],
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent implements OnInit {
  @Input('id') bookID!: BookID;
  public bookData$!: Observable<Book[]>;
  constructor(private services: BookService) {}

  ngOnInit(): void {
    this.getByID();
  }

  getByID() {
    this.bookData$ = this.services.getbyID(this.bookID);
  }
}
