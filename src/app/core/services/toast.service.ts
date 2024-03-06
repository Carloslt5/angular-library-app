import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from '../../components/toast/toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private notificationsSubject = new Subject<Notification>();
  notifications$ = this.notificationsSubject.asObservable();

  add(message: string, type: string) {
    this.notificationsSubject.next({ message, type });
  }
}
