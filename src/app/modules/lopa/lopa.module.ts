import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LopaRoutingModule } from './lopa-routing.module';
import { LopaComponent } from './lopa.component';


@NgModule({
  declarations: [
    LopaComponent
  ],
  imports: [
    CommonModule,
    LopaRoutingModule
  ]
})
export class LopaModule { }
