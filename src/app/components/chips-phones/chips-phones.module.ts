import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ChipsPhonesComponent  } from './chips-phones.component';

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule
  ],
  declarations: [ ChipsPhonesComponent ],
  exports: [ ChipsPhonesComponent ]
})
export class ChipsPhonesModule { }
