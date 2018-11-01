import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { ClientsRoutingModule } from './clients-routing.module';

// Components
import { ClientsComponent } from './clients.component';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  declarations: [
    ClientsComponent
  ]
})
export class ClientsModule { }
