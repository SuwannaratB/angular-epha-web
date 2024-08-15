import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LopaRoutingModule } from './lopa-routing.module';
import { LopaComponent } from './lopa.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    LopaComponent
  ],
  imports: [
    CommonModule,
    LopaRoutingModule,
    ComponentsModule
  ]
})
export class LopaModule { }
