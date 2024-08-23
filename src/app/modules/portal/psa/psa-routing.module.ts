import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsaComponent } from './psa.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: PsaComponent,
    children: [
      { path: '', component: ListComponent},
      { path: 'create', component: CreateComponent},
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsaRoutingModule { }
