import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TitleComponent } from './title/title.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalMemberTeamComponent } from './modals/modal-member-team/modal-member-team.component';
import { ModalAssessmentTeamComponent } from './modals/modal-assessment-team/modal-assessment-team.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TitleComponent,
    NavbarComponent,
    BannerComponent,
    HeaderComponent,
    ModalMemberTeamComponent,
    ModalAssessmentTeamComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
  ],
  exports: [
    TitleComponent,
    HeaderComponent,
    BannerComponent,
    NavbarComponent,
  ]
})
export class ComponentsModule { }
