import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HraComponent } from './hra.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: HraComponent,
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
export class HraRoutingModule { }
