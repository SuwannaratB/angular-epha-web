import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HazopComponent } from './hazop.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: HazopComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'create', component: CreateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HazopRoutingModule { }