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
import { ModalComponent } from './modals/modal/modal.component';
import { HeaderFollowUpComponent } from './header-follow-up/header-follow-up.component';
import { TableFollowUpComponent } from './tables/table-follow-up/table-follow-up.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    TitleComponent,
    NavbarComponent,
    BannerComponent,
    HeaderComponent,
    ModalMemberTeamComponent,
    ModalAssessmentTeamComponent,
    ModalComponent,
    HeaderFollowUpComponent,
    TableFollowUpComponent,
    LoadingComponent,
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
    TableFollowUpComponent,
    HeaderFollowUpComponent,
  ]
})
export class ComponentsModule { }
