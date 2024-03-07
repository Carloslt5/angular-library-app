import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorMessage } from '../interface/http-response';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage: ErrorMessage[];
      if (error instanceof HttpErrorResponse) {
        errorMessage = error.error;
      }
      return throwError(() => errorMessage);
    })
  );
};
