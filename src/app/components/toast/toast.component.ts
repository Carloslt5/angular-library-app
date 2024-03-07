import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../core/services/toast.service';
import { SuccessResponseAPI } from '../../interface/http-response';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'toast',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit {
  @Input() notification: SuccessResponseAPI | null = null;

  constructor(private toastServices: ToastService) {}
  ngOnInit() {
    this.initToast();
  }

  initToast() {
    this.toastServices.notifications$.subscribe((res) => {
      if (res && 'status' in res) {
        this.notification = res;
      } else {
        this.notification = null;
      }
    });
  }

  closeToast() {
    this.toastServices.close();
  }
}
