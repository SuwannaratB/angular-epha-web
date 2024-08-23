import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HazidRoutingModule } from './hazid-routing.module';
import { HazidComponent } from './hazid.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from '../../../shared/shared.module';
import { ComponentsModule } from '../../../components/components.module';
import { TabGeneralComponent } from './create/tab-general/tab-general.component';
import { TabSessionComponent } from './create/tab-session/tab-session.component';
import { TabWorksheetComponent } from './create/tab-worksheet/tab-worksheet.component';


@NgModule({
  declarations: [
    HazidComponent,
    ListComponent,
    CreateComponent,
    TabGeneralComponent,
    TabSessionComponent,
    TabWorksheetComponent
  ],
  imports: [
    CommonModule,
    HazidRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class HazidModule { }
