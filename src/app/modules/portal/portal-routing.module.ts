import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';

const routes: Routes = [
  { path: '', component: PortalComponent,
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'hazid', loadChildren: () => import('./hazid/hazid.module').then(m => m.HazidModule) },
      { path: 'lopa', loadChildren: () => import('./lopa/lopa.module').then(m => m.LopaModule) },
      { path: 'psa', loadChildren: () => import('./psa/psa.module').then(m => m.PsaModule) },
    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
