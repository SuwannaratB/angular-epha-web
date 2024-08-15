import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HazidRoutingModule } from './hazid-routing.module';
import { HazidComponent } from './hazid.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    HazidComponent
  ],
  imports: [
    CommonModule,
    HazidRoutingModule,
    ComponentsModule
  ]
})
export class HazidModule { }
