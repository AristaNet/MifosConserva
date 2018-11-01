import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonValidators } from 'ng-validator';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { errorMessage } from '../../../sources/formErrorMessage';

/**
 * Component class that contains all the accions a properties for the form-client.component.html
 */

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class FormClientComponent implements OnInit {

  /**
   * It has the form group
   */

  public formClient: FormGroup;

  /**
   * It has a dictionary of the errors messages for the inputs 
   */

  public errorDict: any = errorMessage;

  constructor(
    private fb: FormBuilder
  ) { }

  /**
   * Getter that returns the sub form group personalData
   */

  get formPersonalData(): FormGroup {
    return this.formClient.get('personalData') as FormGroup;
  }

  /**
   * It Creates the full form and assings it to the [formClient]{@link #formClient} property
   * 
   * @returns Form group about the form client
   */

  private createForm(): void {
    const personalData = this.fb.group({
      firstname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      pLastname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      mLastname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      gender: [null, CommonValidators.requiredTrim ],
      maritalStatus: [null, CommonValidators.requiredTrim ],
      scholarship: [null],
      profession: [null],
      electorKey: ['', CommonValidators.isNumber ],
      curp: ['', [ CommonValidators.requiredTrim ]], // falta el regex validador, No duplicado
      rfc: [''], // falta el regex validador, No duplicado
      electronicSignature: [''],
      IDProspera: [''],
      birthday: ['', [ CommonValidators.requiredTrim ]],
      birthdayEntity: [''],
      requestDate: ['', CommonValidators.requiredTrim],
      numberDependents: ['', CommonValidators.isNumber ],
      hasPublicCharge: [null],
      familyHasPublicFunction: [null],
      publicFunctionSpecification: [''],
      speakNativeLanguage: [null],
      hasDisabilities: [null],
      hasInternet: [null],
      useSocialNetworks: [null]
    });

    this.formClient = this.fb.group({ personalData });
  }

  /**
   * It sends the data to the server
   */

  public submit(): void {
    console.log(this.formClient.value);
    console.log('VALID FORM: ', this.formClient.get('personalData').valid);
    console.log('ERRORS: ', this.formClient.get('personalData.firstname').errors);
  }

  // ============================ EVENTS =============================

  public stepperChanges(e): void {
    console.log('STEPPER: ', e);
  }

  ngOnInit() {
    this.createForm();
  }

}
