import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

/**
 * Interception service for adding Token authentication to each request
 */

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private ls: LocalStorageService,
    private router: Router
  ) {}

  /**
   * Intercept every request and add the authorization token to the request
   * @param req reques to handler
   * @param next object for handling the request
   */

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = this.ls.getToken();

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `JWT ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError( this.errorHandle() )
    );
  }

   /**
   * This method handle the erros produces for the server or client, when a request fail
   * @returns A Observable error
   */
  
  private errorHandle() {

    // The closure with the arrow function is necesary for recognizing the "this" and doesn't lose the scope
    return (err: HttpErrorResponse) => {

      let error = null;
  
      if (err.error instanceof ErrorEvent) {
        // Client errors (conection, event error about rxJs, etc...)
        error = err;
      } else {
        // Server errors
        error = err.error;
      
        // if the user is unauthorized, it redirect to the login page and cleans the localstorage
        if (err.status === 401) {
          this.router.navigateByUrl('/login');
          this.ls.cleanAll();
        }
      }
  
      return throwError( error );

    };

  }

}