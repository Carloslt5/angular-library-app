import { Component, Input } from '@angular/core';
import { ErrorMessage } from '../../pages/createbook/createbook.component';

@Component({
  selector: 'error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
  @Input() errorMessages!: ErrorMessage[];
}
