import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { ClientsRoutingModule } from './clients-routing.module';

// modules
import { HasPermissionModule } from '@directives/has-permission/has-permission.module';

// Components
import { ClientsComponent } from './clients.component';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    HasPermissionModule
  ],
  declarations: [
    ClientsComponent
  ]
})
export class ClientsModule { }
