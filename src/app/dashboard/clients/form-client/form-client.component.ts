import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonValidators } from 'ng-validator';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { errorMessage } from '../../../sources/formErrorMessage';
import { RGX } from '../../../sources/regex';

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
      gender: [null, CommonValidators.requiredTrim ],
      maritalStatus: [null, CommonValidators.requiredTrim ],
      scholarship: [null],
      profession: [null],
      electorKey: ['', CommonValidators.isNumber ],
      curp: ['', [ CommonValidators.requiredTrim, Validators.pattern( RGX.CURP ) ]], // No duplicado
      rfc: ['', Validators.pattern( RGX.RFC ) ], //No duplicado
      electronicSignature: [''],
      IDProspera: [''],
      birthday: ['', [ Validators.required ]],
      birthdayEntity: [''],
      requestDate: ['', Validators.required],
      numberDependents: ['', CommonValidators.isNumber ],
      hasPublicCharge: [null],
      familyHasPublicFunction: [null],
      publicFunctionSpecification: [''],
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
      colony: [''],
      settlement: [''],
      settlementName: [''],
      email: ['', [CommonValidators.requiredTrim, CommonValidators.isEmail ]],
      rolHome: ['', Validators.required],
      phone: ['', [ CommonValidators.requiredTrim, CommonValidators.isPhone ]],
      phoneType: ['', Validators.required ]
    });

    const bussinessData = this.fb.group({
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
      colony: [''],
      settlement: [''],
      settlementName: [''],
      phone: ['', [ CommonValidators.requiredTrim, CommonValidators.isPhone ]],
      phoneType: ['', Validators.required ]
    });

    const economicsData = this.fb.group({
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

    });

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
      economicsData,
      lifeInsurance
    });
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
