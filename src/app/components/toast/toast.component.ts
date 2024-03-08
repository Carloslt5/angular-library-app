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
  toastColor!: string;

  constructor(private toastServices: ToastService) {}
  ngOnInit() {
    this.initToast();
  }

  initToast() {
    this.toastServices.notifications$.subscribe((res) => {
      if (res && 'status' in res) {
        this.notification = res;
        this.handleToastColor(res.status);
      } else {
        this.notification = null;
      }
    });
  }

  closeToast() {
    this.toastServices.close();
  }

  handleToastColor(status: boolean) {
    switch (status) {
      case true:
        this.toastColor = 'bg-success';
        break;
      case false:
        this.toastColor = 'bg-error';
        break;
      default:
        this.toastColor = 'bg-info';
        break;
    }
  }
}
