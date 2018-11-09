import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// Routes
import { FormClientRoutingModule } from './form-client-routing.module';

// Materials Components
import { 
  MatStepperModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';

// Custom Modules
import { ChipsPhonesModule } from '../../../components/chips-phones/chips-phones.module';

// Pipes
import { ErrorMessageModule } from '../../../pipes/error-message/error-message.module';

// Components
import { FormClientComponent } from './form-client.component';

@NgModule({
  imports: [
    CommonModule,
    FormClientRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ErrorMessageModule,
    MatCheckboxModule,
    ChipsPhonesModule
  ],
  declarations: [
    FormClientComponent
  ]
})
export class FormClientModule { }
