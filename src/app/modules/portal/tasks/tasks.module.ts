import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { ComponentsModule } from '../../../components/components.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
