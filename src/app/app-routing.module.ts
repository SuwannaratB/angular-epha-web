import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layouts/index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
      { path: 'hazid', loadChildren: () => import('./modules/hazid/hazid.module').then(m => m.HazidModule) }, 
      { path: 'psa', loadChildren: () => import('./modules/psa/psa.module').then(m => m.PsaModule) },
      { path: 'lopa', loadChildren: () => import('./modules/lopa/lopa.module').then(m => m.LopaModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
