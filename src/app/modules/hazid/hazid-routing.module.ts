import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HazidComponent } from './hazid.component';

const routes: Routes = [{ path: '', component: HazidComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HazidRoutingModule { }
