import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An Unknown Error Occured!';
        if (error.error.message) {
          // If the error response has a message set it.
          errorMessage = error.error.message;
        }
        Swal.fire({
          title: errorMessage,
          text: errorMessage,
          type: 'error',
          confirmButtonText: 'Ok'
        });
        return throwError(error);
      })
    );
  }
}
