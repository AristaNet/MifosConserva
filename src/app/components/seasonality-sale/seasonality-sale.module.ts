import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SeasonalitySaleComponent } from './seasonality-sale.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [ SeasonalitySaleComponent ],
  exports: [ SeasonalitySaleComponent ]
})
export class SeasonalitySaleModule { }
