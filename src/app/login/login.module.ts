import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// Routes
import { LoginRoutingModule } from './login-routing.module';

// pipes
import { ErrorMessageModule } from '../pipes/error-message/error-message.module';

// Components
import { LoginComponent } from './login.component';

// Angular material
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule, 
  MatIconModule, 
  MatProgressBarModule 
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ErrorMessageModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
