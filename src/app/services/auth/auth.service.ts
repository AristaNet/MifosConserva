import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoints } from '@sources/endpoints';
import { Login, LoginResponse } from '@interfaces/interfaces';

/**
 * Service for authentication (login, logout, etc...)
 */

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * 
   * @param http Http services
   */

  constructor(
    private http: HttpClient
  ) {}

  /**
   * It does the login of the user
   * @param credentials Creadential for the login
   */

  public login(credentials: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>( endpoints.login, credentials );
  }

  /**
   * It performs the logout of the user
   */
  
  public logout(): Observable<any> {
    return this.http.get<any>( endpoints.login );
  }


}
