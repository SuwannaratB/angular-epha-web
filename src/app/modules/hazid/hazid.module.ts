import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HazidRoutingModule } from './hazid-routing.module';
import { HazidComponent } from './hazid.component';


@NgModule({
  declarations: [
    HazidComponent
  ],
  imports: [
    CommonModule,
    HazidRoutingModule
  ]
})
export class HazidModule { }
