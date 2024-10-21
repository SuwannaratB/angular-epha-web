import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HazopRoutingModule } from './hazop-routing.module';
import { HazopComponent } from './hazop.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ComponentsModule } from '../../../components/components.module';
import { SharedModule } from '../../../shared/shared.module';
import { TabGeneralComponent } from './create/tab-general/tab-general.component';
import { TabSessionComponent } from './create/tab-session/tab-session.component';
import { TabNodeComponent } from './create/tab-node/tab-node.component';
import { TabWorksheetComponent } from './create/tab-worksheet/tab-worksheet.component';
import { TabRamComponent } from './create/tab-ram/tab-ram.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HazopComponent,
    ListComponent,
    CreateComponent,
    TabGeneralComponent,
    TabSessionComponent,
    TabNodeComponent,
    TabWorksheetComponent,
    TabRamComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    HazopRoutingModule,
    ReactiveFormsModule
  ]
})
export class HazopModule { }
