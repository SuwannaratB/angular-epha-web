import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { HomeComponent } from './pages/home/home.component';
import { HazidComponent } from './pages/hazid/hazid.component';
import { PsaComponent } from './pages/psa/psa.component';
import { LopaComponent } from './pages/lopa/lopa.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    PortalComponent,
    HomeComponent,
    HazidComponent,
    PsaComponent,
    LopaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
