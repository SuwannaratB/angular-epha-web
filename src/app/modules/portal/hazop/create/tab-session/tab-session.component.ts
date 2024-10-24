import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { timeHr, timeMin } from '../../../../../core/data/dataMaster';
import { ModalMemberTeamComponent } from '../../../../../components/modals/modal-member-team/modal-member-team.component';
import { MatDialog } from '@angular/material/dialog';
import { resetFormGroup } from '../../../../../core/utils/form-groups';
import { MaxService } from '../../../../../core/services/max-service/max.service';
import { Header } from '../../../../../core/models/header-model/header.model';
import { MemberTeam } from '../../../../../core/models/member-team-model/member-team.model';
import { Approver } from '../../../../../core/models/member-team-model/approver.model';
import { deleteDataArray } from '../../../../../core/utils/function';
import { HazopSession } from '../../../../../core/models/hazop-model/hazop-session.model';

@Component({
  selector: 'app-tab-session',
  templateUrl: './tab-session.component.html',
  styleUrl: './tab-session.component.scss'
})
export class TabSessionComponent {

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public maxService: MaxService,
  ){}

  @Input() sessionForm: FormGroup| any;
  @Input() memberTeamDelete: MemberTeam[] = [];
  @Input() approverDelete: Approver[] = [];
  @Input() header: Header | undefined;

  timeHr = timeHr;
  timeMin = timeMin;

  onChangeSessionForm(section: string, index: number): void {
    if (section == 'nameofArea') {
      // set default company
      // const itemAPU = this.areaList.find(_item => _item.id == this.generalForm.value.id_unit_no);
      // this.generalForm.patchValue({
      //   id_company: itemAPU.id_company
      // });
    }
  }

  openDialog(session: HazopSession, value: MemberTeam[]|Approver[], type: string, index: number): void{
    const dialogRef = this.dialog.open(ModalMemberTeamComponent, {
      disableClose: true ,
      panelClass: 'member-dialog',
      data: {
        session: session,
        value: value,
        type: type,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.type === 'member_team') {
        this.memberTeamDelete = [...this.memberTeamDelete, ...result.remove];
        const session = this.sessionForm.at(index);
        session.patchValue({ member_team: [...result.data] });
        console.log(session.value)
      }
      if (result.type === 'approver') {
        this.approverDelete = [...this.approverDelete, ...result.remove];
        const session = this.sessionForm.at(index);
        session.patchValue({ approver: [...result.data] });
        console.log(session.value)
      }
      // คุณสามารถจัดการผลลัพธ์หลังจากโมดัลปิดได้ที่นี่
    });
  }

  onAddSession(index: number): void{
    const session = this.sessionForm.at(index);
    const maxSeq = this.maxService.getMax('session');
    if(!session || !maxSeq) return console.log('session or max seq not found!')
    const newSession = resetFormGroup({...session})
    this.sessionForm.insert(index + 1, this.fb.group({
      ...newSession, 
      id: maxSeq,
      seq: maxSeq,
      id_pha: this.header?.seq,
      action_type: 'insert',
      member_team: [[]],
      approver: [[]],
    }));
    this.maxService.updateMax('session', maxSeq + 1);
    console.log( this.sessionForm.value)
  }

  onDeleteSession(index: number): void{
    const session = this.sessionForm.at(index);
    // delete member team
    this.memberTeamDelete = deleteDataArray(session.value.member_team, 'member_team') as MemberTeam[];
    // delete approver
    this.approverDelete = deleteDataArray(session.value.approver, 'approver') as Approver[];

    if (this.sessionForm.value.length > 1) {
      this.sessionForm.removeAt(index);
    } else {
      session.patchValue({
        action_change: 1,
        member_team: [],
        approver: [],
        meeting_date: new Date().toISOString().split('T')[0],
        meeting_start_time_hh: 0,
        meeting_start_time_mm: 0,
        meeting_end_time_hh: 0,
        meeting_end_time_mm: 0,
      });
    }
  }

  onCopySession(index: number) {
    const session = this.sessionForm.at(index).value;
    const maxSeq = this.maxService.getMax('session');
    if(!session || !maxSeq) return console.log('session or max seq not found!')
    const copiedSession = {
      ...session, 
      id: maxSeq,
      seq: maxSeq,
      action_type: 'insert',
      member_team: [[...session.member_team]],         
      approver: [[...session.approver]]         
    };
    
    this.sessionForm.insert(index + 1, this.fb.group(copiedSession));
    this.maxService.updateMax('session', maxSeq + 1);
    console.log(this.sessionForm.value)
  }

}
