import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HraRoutingModule } from './hra-routing.module';
import { HraComponent } from './hra.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ComponentsModule } from '../../../components/components.module';
import { SharedModule } from '../../../shared/shared.module';
import { TabGeneralComponent } from './create/tab-general/tab-general.component';
import { TabHealthHazardsComponent } from './create/tab-health-hazards/tab-health-hazards.component';
import { TabWorkerGroupsComponent } from './create/tab-worker-groups/tab-worker-groups.component';
import { TabManageRecommendationsComponent } from './create/tab-manage-recommendations/tab-manage-recommendations.component';
import { TabWorksheetComponent } from './create/tab-worksheet/tab-worksheet.component';
import { TabNameListComponent } from './create/tab-name-list/tab-name-list.component';
import { TabReportComponent } from './create/tab-report/tab-report.component';


@NgModule({
  declarations: [
    HraComponent,
    ListComponent,
    CreateComponent,
    TabGeneralComponent,
    TabHealthHazardsComponent,
    TabWorkerGroupsComponent,
    TabManageRecommendationsComponent,
    TabWorksheetComponent,
    TabNameListComponent,
    TabReportComponent
  ],
  imports: [
    CommonModule,
    HraRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class HraModule { }
