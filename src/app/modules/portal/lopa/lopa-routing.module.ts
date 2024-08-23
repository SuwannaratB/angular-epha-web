import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LopaComponent } from './lopa.component';

const routes: Routes = [{ path: '', component: LopaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LopaRoutingModule { }
