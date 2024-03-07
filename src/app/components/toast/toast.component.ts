import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../core/services/toast.service';
import { SuccessResponseAPI } from '../../interface/http-response';

@Component({
  selector: 'toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit {
  @Input() notification!: SuccessResponseAPI;

  constructor(private toastServices: ToastService) {}
  ngOnInit() {
    this.toastServices.notifications$.subscribe((res) => {
      if ('status' in res) {
        this.notification = res;
      }
    });
  }
}
