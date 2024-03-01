import { Component } from '@angular/core';
import { MainContainerComponent } from '../../components/layout/main-container/main-container.component';

@Component({
  selector: 'app-createbook',
  standalone: true,
  imports: [MainContainerComponent],
  templateUrl: './createbook.component.html',
})
export class CreatebookComponent {}
