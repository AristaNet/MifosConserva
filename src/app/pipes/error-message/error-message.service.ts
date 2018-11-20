import { Injectable, Optional } from '@angular/core';

/**
 * Service for serving the dictionary of error to the erroMessagePipe
 */

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  /**
   * @param _errorDict It charges the dictionary of errors from the forRoot methods in the errorMessageModule
   */

  constructor(
    @Optional() private _errorDict: any = {}
  ) { }

  /**
   * It gets the dictionary of errors
   */

  get errorDict(): any {
    return this._errorDict;
  }
}
