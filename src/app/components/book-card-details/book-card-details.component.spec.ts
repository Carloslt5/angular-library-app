import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardDetailsComponent } from './book-card-details.component';

describe('BookCardDetailsComponent', () => {
  let component: BookCardDetailsComponent;
  let fixture: ComponentFixture<BookCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCardDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
