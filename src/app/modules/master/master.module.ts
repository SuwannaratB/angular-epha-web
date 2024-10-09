import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { ComponentsModule } from '../../components/components.module';
import { AuthorizationSettingComponent } from './manage-user/authorization-setting/authorization-setting.component';
import { ManageUserComponent } from './manage-user/manage-user/manage-user.component';
import { CompanyComponent } from './system-wide/company/company.component';
import { ApuComponent } from './system-wide/apu/apu.component';
import { ComplexComponent } from './system-wide/complex/complex.component';
import { UnitNoComponent } from './system-wide/unit-no/unit-no.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MasterComponent,
    AuthorizationSettingComponent,
    ManageUserComponent,
    CompanyComponent,
    ApuComponent,
    ComplexComponent,
    UnitNoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
