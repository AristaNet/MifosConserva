import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SimpleAlertComponent } from './simple-alert.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    SimpleAlertComponent
  ],
  entryComponents: [
    SimpleAlertComponent
  ],
  exports: [
    SimpleAlertComponent
  ]
})
export class SimpleAlertModule { }
