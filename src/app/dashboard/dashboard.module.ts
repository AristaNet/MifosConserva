import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { DashboardRoutingModule } from './dashboard-routing.module';

// Materials Components
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule ,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

// Components
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
