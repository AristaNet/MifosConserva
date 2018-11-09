import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { CommonValidators } from 'ng-validator';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { errorMessage } from '../../../sources/formErrorMessage';
import { RGX } from '../../../sources/regex';
import { MatCheckbox } from '@angular/material/checkbox';

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
   * Getter that returns the sub form group lifeInsurance
   */

  get formLifeInsuranceData(): FormGroup {
    return this.formClient.get('lifeInsurance') as FormGroup;
  }

  /**
   * Getter that returns the sub form group addressData
   */

  get formAddressData(): FormGroup {
    return this.formClient.get('addressData') as FormGroup;
  }

  /**
   * Getter that returns the sub form group bussinessData
   */

  get formBussinessData(): FormGroup {
    return this.formClient.get('bussinessData') as FormGroup;
  }

  /**
   * Getter that returns the sub form group pldData
   */

  get formPldData(): FormGroup {
    return this.formClient.get('pldData') as FormGroup;
  }

  /**
   * Getter that returns the sub form group economicsData
   */

  get formEconomicsData(): FormGroup {
    return this.formClient.get('economicsData') as FormGroup;
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
      gender: [null, Validators.required ],
      maritalStatus: [null, Validators.required ],
      scholarship: [null],
      profession: [null],
      electorKey: ['', CommonValidators.isNumber ],
      curp: ['', [ CommonValidators.requiredTrim, Validators.pattern( RGX.CURP ) ]], // No duplicado
      rfc: ['', Validators.pattern( RGX.RFC ) ], //No duplicado
      electronicSignature: [''],
      IDProspera: [''],
      birthday: ['', [ Validators.required ]],
      birthdayEntity: [null, Validators.required ],
      requestDate: ['', Validators.required],
      numberDependents: ['', CommonValidators.isNumber ],
      speakNativeLanguage: [null],
      hasDisabilities: [null],
      hasInternet: [null],
      useSocialNetworks: [null]
    });

    const addressData = this.fb.group({
      address: ['', CommonValidators.requiredTrim ],
      timeAvailable: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      period: [null, Validators.required ],
      externalNumber: [''],
      internalNumber: [''],
      roadType: [null, Validators.required],
      postalCode: ['', CommonValidators.isNumber],
      country: ['', Validators.required],
      state: ['', Validators.required],
      municipality: ['', Validators.required],
      locality: ['', Validators.required],
      colony: [''],
      settlement: [''],
      settlementName: [''],
      email: ['', CommonValidators.isEmail ],
      rolHome: ['', Validators.required],
      formPhone: this.createFormPhone(),
      phones: this.fb.array([], Validators.required)
    });

    const bussinessData = this.fb.group({
      isCopied: false,
      economicActivity: [null, Validators.required],
      beginActivity: [null, Validators.required],
      employeesNumber: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      resourcesOrigin: [null, Validators.required],
      creditDestination: [null, Validators.required],
      totalSales: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      expenses: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      anotherIncome: ['', CommonValidators.isNumber ],
      totalIncome: ['', CommonValidators.isNumber ],
      address: ['', CommonValidators.requiredTrim ],
      timeAvailable: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      period: [null, Validators.required ],
      externalNumber: [''],
      internalNumber: [''],
      roadType: [null, Validators.required],
      postalCode: ['', CommonValidators.isNumber],
      country: ['', Validators.required],
      state: ['', Validators.required],
      municipality: ['', Validators.required],
      locality: ['', Validators.required],
      colony: [''],
      settlement: [''],
      settlementName: [''],
      formPhone: this.createFormPhone(),
      phones: this.fb.array([], Validators.required)
    });

    const pldData = this.fb.group({
      hasPublicCharge: [null],
      hasPublicChargeSpecification: [''],
      familyHasPublicFunction: [null],
      publicFunctionSpecification: ['']
    });

    /* const economicsData = this.fb.group({
      economicActivity: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      beginActivity: ['', Validators.required],
      employeesNumber: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      resourcesOrigin: [''],
      creditAmount: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      creditDestination: [''],
      totalSales: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber ]],
      expenses: ['', CommonValidators.requiredTrim ],
      spouseSalary: ['', CommonValidators.isNumber ],
      hadCredit: [null, Validators.required ],
      hadCreditAmount: ['0', CommonValidators.isNumber ],
      incomeHasImproved: [null, Validators.required],
      hasAnotherJob: [null, Validators.required ],

    }); */

    const lifeInsurance = this.fb.group({
      firstname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      pLastname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      mLastname: ['', [ CommonValidators.requiredTrim, Validators.maxLength(50) ]],
      birthday: ['', [ Validators.required ]],
      relationship: [null, Validators.required ],
      percent: ['', [ CommonValidators.requiredTrim, CommonValidators.isNumber, CommonValidators.greaterThan(0), CommonValidators.lessThan(100, true) ]],
      phone: ['', CommonValidators.isPhone ],
      address: ['', CommonValidators.requiredTrim ],
      externalNumber: [''],
      internalNumber: [''],
      roadType: [null, Validators.required ],
      postalCode: ['', CommonValidators.isNumber ],
      country: ['', Validators.required ],
      state: ['', Validators.required ],
      municipality: ['', Validators.required ],
      colony: [''],
      settlement: [''],
      settlementName: [''],
    });

    this.formClient = this.fb.group({ 
      personalData, 
      addressData, 
      bussinessData,
      pldData,
      // economicsData,
      lifeInsurance
    });
  }

  /**
   * it creates a new form phone group
   * @returns A formGroup with two props phone and phoneType
   */

  private createFormPhone(): FormGroup {
    return this.fb.group({
      phone: [null, CommonValidators.isPhone ],
      phoneType: [null],
      isEdited: null,
      index: null
    });
  }

  /**
   * It adds a new phone number to the formArray control or update if is edited
   * 
   * @param form form group to edit and it has a formPhone
   */

  public addPhone(form: FormGroup): void {
    const f = form.get('phones') as FormArray;
    const formPhone = form.get('formPhone');
    const phone = formPhone.get('phone').value;
    const phoneType = formPhone.get('phoneType').value;
    const isEdited = formPhone.get('isEdited').value;
    const index = formPhone.get('index').value;

    // it checks if the form is edited and if the position exists
    if( isEdited && f.at( index ) ) {
      // it updates the formArray in the position passed
      f.at( index ).patchValue({ phone, phoneType });
    } else {
      // it adds new formgroup to the array
      f.push(
        this.fb.group({ phone, phoneType })
      );
    }

    formPhone.reset();
  }

  /**
   * It removes a phone number of the formArray control
   * 
   * @param phoneRemoved phone removed in the chips phone collections, it contains the following object { index: 0, phone: { phone: '123132132', phoneType: 1 } }
   * @param form the specific form group where the phone object will be removed
   */

  public removePhone(phoneRemoved: any, form: FormGroup): void {
    const phones = form.get('phones') as FormArray;
    const formPhone = form.get('formPhone');

    phones.removeAt( phoneRemoved.index );

    // if the phone is being edited and the same time is being removed, reset the formPhone to avoid errors
    if ( formPhone.get('index').value == phoneRemoved.index ) 
      formPhone.reset();

  }

   /**
   * It edits a phone number of the formArray control
   * 
   * @param phoneToEdit The phone object to edit, it contains the following object { index: 0, phone: { phone: '123132132', phoneType: 1 } }
   * @param formPhone The form group where it will be reflected the data for editing
   */

  public editPhone(phoneToEdit: any, formPhone: FormGroup): void {
    let phone = phoneToEdit.phone;

    // it adds the index to edit and specify that it is edited
    phone.isEdited = true;
    phone.index = phoneToEdit.index;

    formPhone.patchValue( phone );
  }

  /**
   * It copies the formAddress data to formBussines
   * 
   * @param checkboxEvent The checkboxEvent when the checkbox is marked or unmarked
   */

  public copyAddressToBussiness(checkboxEvent: MatCheckbox): void {

    if ( checkboxEvent.checked ) {
      const formAddress = this.formAddressData.value;

      this.formBussinessData.patchValue( formAddress );
      
      // it's necesary replace the phone property and filled manually, because when the patchValue() is executed, it doesn't fill the phones formArray.
      if ( Array.isArray( formAddress.phones ) && formAddress.phones.length ) {
        this.formBussinessData.setControl('phones', this.fb.array(
          formAddress.phones.map( e => this.fb.group( e ) )
        ));
      }

    } else {
      this.formBussinessData.reset();
      // it's necesary replace the phones property, because the reset() methods only clean the data
      this.formBussinessData.setControl('phones', this.fb.array([], Validators.required));
    }

  }

  /**
   * It sends the data to the server
   */

  public submit(): void {
    console.log(this.formClient.value);
    console.log('VALID FORM: ', this.formClient.get('personalData').valid);
    console.log('ERRORS: ', this.formClient.get('personalData.firstname').errors);
  }


  ngOnInit() {
    this.createForm();
  }

}
