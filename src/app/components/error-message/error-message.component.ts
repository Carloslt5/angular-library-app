import { Component, Input } from '@angular/core';
import { ErrorMessage } from '../../interface/http-response';

@Component({
  selector: 'error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
  @Input() errorMessages!: ErrorMessage[];
}
