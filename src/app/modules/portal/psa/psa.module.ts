import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsaRoutingModule } from './psa-routing.module';
import { PsaComponent } from './psa.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ComponentsModule } from '../../../components/components.module';
import { SharedModule } from '../../../shared/shared.module';
import { TabGeneralComponent } from './create/tab-general/tab-general.component';
import { TabSessionComponent } from './create/tab-session/tab-session.component';
import { TabWorksheetComponent } from './create/tab-worksheet/tab-worksheet.component';


@NgModule({
  declarations: [
    PsaComponent,
    ListComponent,
    CreateComponent,
    TabGeneralComponent,
    TabSessionComponent,
    TabWorksheetComponent
  ],
  imports: [
    CommonModule,
    PsaRoutingModule,
    ComponentsModule,
    SharedModule
  ]
})
export class PsaModule { }
