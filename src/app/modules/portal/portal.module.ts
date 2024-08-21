import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { HomeComponent } from './pages/home/home.component';
import { HazidComponent } from './pages/hazid/hazid.component';
import { PsaComponent } from './pages/psa/psa.component';
import { LopaComponent } from './pages/lopa/lopa.component';
import { ComponentsModule } from '../../components/components.module';
import { HazidTabGeneralComponent } from './pages/hazid/hazid-tab-general/hazid-tab-general.component';
import { HazidTabSessionComponent } from './pages/hazid/hazid-tab-session/hazid-tab-session.component';
import { HazidTabWorksheetComponent } from './pages/hazid/hazid-tab-worksheet/hazid-tab-worksheet.component';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PsaComponent,
    HomeComponent,
    LopaComponent,
    HazidComponent,
    PortalComponent,
    HazidTabGeneralComponent,
    HazidTabSessionComponent,
    HazidTabWorksheetComponent
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
