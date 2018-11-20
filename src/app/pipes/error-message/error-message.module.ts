import { NgModule, ModuleWithProviders } from '@angular/core';
import { ErrorMessagePipe } from './error-message.pipe';
import { ErrorMessageService } from './error-message.service';

@NgModule({
  declarations: [ ErrorMessagePipe ],
  exports: [ ErrorMessagePipe ]
})
export class ErrorMessageModule { 

  /**
   * Method for chargin the dictionary of errors to the service
   * @param dict Dictionary of errors
   */

  static forRoot(dict: any): ModuleWithProviders {

    if (Array.isArray(dict) || typeof dict !== 'object') {
      throw Error('dict needs to be a object {} for the ErrorMessageModule.forRoot( dict )');
    }

    return {
      ngModule: ErrorMessageModule,
      providers: [
        { provide: ErrorMessageService, useValue: dict }
      ]
    };
  }

}
