import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { EMocTrackingComponent } from './modules/e-moc-tracking/e-moc-tracking.component';

const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/portal/portal.module').then(m => m.PortalModule),
      canActivateChild: [authGuard], 
    },
    
    { path: 'master', loadChildren: () => import('./modules/master/master.module').then(m => m.MasterModule),
      canActivateChild: [authGuard],  
    },

    { path: 'emoc', component: EMocTrackingComponent },

    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
