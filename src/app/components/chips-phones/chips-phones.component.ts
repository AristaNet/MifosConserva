import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Component class that generate a list of chips for phone numbers
 */

@Component({
  selector: 'an-chips-phones',
  templateUrl: './chips-phones.component.html',
  styleUrls: ['./chips-phones.component.css']
})
export class ChipsPhonesComponent {

  /**
   * Collections of phone numbers
   */

  @Input() phones: any[] = [];

  /**
   * Property that contains the phone number
   */

  @Input() phoneProp: string = '';

  /**
   * Property that contains the phone type
   */

  @Input() phoneTypeProp: string = '';

  /**
   * It emites an event when the close button is clicked in the chip
   */

  @Output() removePhone = new EventEmitter();

  /**
   * It emites an event when the edit button is clicked in the chip
   */

  @Output() editPhone = new EventEmitter();

  constructor() { }

  /**
   * It removes a chip and emites the [removePhone]{@link #removePhone} event
   * @param phone phone object to remove
   * @param index position of the phone object to remove
   */

   remove(phone: any, index: number): void {
      this.removePhone.emit({ phone, index });
   }

   /**
   * It removes a chip and emites the [editPhone]{@link #editPhone} event
   * @param phone phone object to edit
   * @param index position of the phone object to edit
   */

  edit(phone: any, index: number): void {
    this.editPhone.emit({ phone, index });
 }

}
