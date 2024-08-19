import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { HomeComponent } from './pages/home/home.component';
import { HazidComponent } from './pages/hazid/hazid.component';
import { PsaComponent } from './pages/psa/psa.component';
import { LopaComponent } from './pages/lopa/lopa.component';

const routes: Routes = [
  { path: '', component: PortalComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'hazid', component: HazidComponent },
      { path: 'psa', component: PsaComponent },
      { path: 'lopa', component: LopaComponent },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
