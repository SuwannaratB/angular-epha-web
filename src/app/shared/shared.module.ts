import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SelectComponent } from './select/select.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ButtonComponent } from './button/button.component';
import { OptionsComponent } from './options/options.component';
import { MemberButtonComponent } from './member-button/member-button.component';


@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    IconButtonComponent,
    ButtonComponent,
    OptionsComponent,
    MemberButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    SelectComponent,
    IconButtonComponent,
    ButtonComponent,
    OptionsComponent,
    MemberButtonComponent
  ]
})
export class SharedModule { }
