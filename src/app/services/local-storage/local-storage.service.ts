import { Injectable } from '@angular/core';

/**
 * service for managing the localstorage
 */

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  /**
   * It storages the token 
   * @param token token of the session
   */

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  /**
   * 
   * @returns The token of the session
   */

  public getToken(): string {
    return localStorage.getItem('token');
  }

  /**
   * It saves the user 
   * @param user The user object to save
   */

  public setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify( user ));
  }

  /**
   * @returns The user logged
   */

  public getUser(): any {
    return JSON.parse(localStorage.getItem('user'));
  }

  /**
   * It saves the modules 
   * @param modules The modules object to save
   */

  public setModules(modules: any): void {
    localStorage.setItem('modules', JSON.stringify( modules ));
  }

  /**
   * @returns The modules logged
   */

  public getModules(): any {
    return JSON.parse(localStorage.getItem('modules'));
  }

  /**
   * It cleans all the localstorage
   */
  
  public cleanAll(): void {
    localStorage.clear();
  }

}
