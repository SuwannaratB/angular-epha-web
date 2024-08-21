import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  // {path: '', component: IndexComponent,
  //   canActivateChild: [authGuard],
  //   children: [
  //     { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  //     { path: 'hazid', loadChildren: () => import('./modules/hazid/hazid.module').then(m => m.HazidModule) }, 
  //     { path: 'psa', loadChildren: () => import('./modules/psa/psa.module').then(m => m.PsaModule) },
  //     { path: 'lopa', loadChildren: () => import('./modules/lopa/lopa.module').then(m => m.LopaModule) }
  //   ]
  // },
  { path: '', loadChildren: () => import('./modules/portal/portal.module').then(m => m.PortalModule),
    canActivateChild: [authGuard], 
  },
  
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
