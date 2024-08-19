import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
