import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Service that manage the petitions with the header
 */

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * GET method modified that provides options, add header,retry, etc...
   * @param url resource for fetching data
   */

  public get<T>(url: string): Observable<T | any> {
    return this.http.get<T>( url ).pipe( catchError( this.errorHandle ) );
  }

  /**
   * POST method modified that provides options, add header,retry, etc...
   * @param url resource for fetching data
   * @param data data to send to the server
   */

  public post<T>(url: string, data: any): Observable<T | any> {
    return this.http.post<T>( url, data ).pipe( catchError( this.errorHandle ) );
  }


  /**
   * This method handle the erros produces for the server or client, when a request fail
   * @param err Error object about the request
   */

  private errorHandle(err: HttpErrorResponse): any {
    if (err.error instanceof ErrorEvent) {
      // client-side errors (conections)
      console.log('CLIENT-SIDE ERROR:', err);
    } else {
      // server-side errors
      console.log('SERVER-SIDE ERROR:', err);
    }

    return throwError('A error');

  }
}
