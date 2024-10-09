import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { ManageUserComponent } from './manage-user/manage-user/manage-user.component';
import { AuthorizationSettingComponent } from './manage-user/authorization-setting/authorization-setting.component';
import { CompanyComponent } from './system-wide/company/company.component';
import { UnitNoComponent } from './system-wide/unit-no/unit-no.component';
import { ApuComponent } from './system-wide/apu/apu.component';
import { ComplexComponent } from './system-wide/complex/complex.component';

const routes: Routes = [
  { path: '', component: MasterComponent, 
    children: [
      { path: 'manage-user', component: ManageUserComponent },
      { path: 'authorization-setting', component: AuthorizationSettingComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'unit-no', component: UnitNoComponent },
      { path: 'apu', component: ApuComponent },
      { path: 'complex', component: ComplexComponent },
    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
