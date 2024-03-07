import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { APIResponse } from '../../interface/http-response';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private notificationsSubject = new Subject<APIResponse | null>();
  notifications$ = this.notificationsSubject.asObservable();

  add(responseData: APIResponse) {
    this.notificationsSubject.next(responseData);
  }
  close() {
    this.notificationsSubject.next(null);
  }
}
