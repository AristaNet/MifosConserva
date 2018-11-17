import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * This component is a simple alert template for showing error messages, warnings, etc..
 */

@Component({
  selector: 'app-simple-alert',
  templateUrl: './simple-alert.component.html',
  styleUrls: ['./simple-alert.component.css']
})
export class SimpleAlertComponent {

  /**
   * @param data They are the data for showing in the dialog
   * @example
   * data reveive three posible values:
   *  - title: It's the title of the dialog
   *  - message: It's the message (content) of the dialog
   *  - cancellable: It show the cancel button in the dialog
   * 
   * 
   * If you want to performe some actions after to close, the "aceptar" button always returns "true"
   * and the "cancel" button returns anything. In the component whose intanciated this dialog is possible determinate
   * what to do, and it's easy to knows which button was clicked
   */

  constructor(
    @Inject( MAT_DIALOG_DATA ) public data: any = {}
  ) { }

}
