import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PortalComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    MatIconModule,
    ComponentsModule,
    PortalRoutingModule,
  ]
})
export class PortalModule { }
