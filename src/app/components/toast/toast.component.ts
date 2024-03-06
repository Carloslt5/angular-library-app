import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../core/services/toast.service';

export interface Notification {
  message: string;
  type: string;
}
@Component({
  selector: 'toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit {
  @Input() notification: Notification | null = null;

  constructor(private toastServices: ToastService) {}
  ngOnInit() {
    this.toastServices.notifications$.subscribe((res) => {
      console.log('Esta es la en toast ', res);
      this.notification = res;
    });
  }
}
