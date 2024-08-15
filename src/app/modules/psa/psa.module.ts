import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsaRoutingModule } from './psa-routing.module';
import { PsaComponent } from './psa.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    PsaComponent
  ],
  imports: [
    CommonModule,
    PsaRoutingModule,
    ComponentsModule
  ]
})
export class PsaModule { }
