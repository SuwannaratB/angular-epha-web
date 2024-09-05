import { Component, Input, OnInit } from '@angular/core';
import { ModalMemberTeamComponent } from '../../../../../components/modals/modal-member-team/modal-member-team.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { timeHr, timeMin } from '../../../../../core/data/dataTime';
import { HraSession } from '../../../../../core/models/hra-model/hra-session.model';
import { resetFormGroup } from '../../../../../core/utils/form-groups';

@Component({
  selector: 'app-tab-general',
  templateUrl: './tab-general.component.html',
  styleUrl: './tab-general.component.scss'
})
export class TabGeneralComponent implements OnInit {
  
  constructor(
    public dialog: MatDialog,
    private fb:FormBuilder
  ) {}

  @Input() generalForm: FormGroup| any
  @Input() sessionForm: FormGroup| any
  @Input() departmentList: any[] = []
  @Input() sectionList: any[] = [];
  @Input() companyList: any[] = [];
  @Input() areaList: any[] = [];
  @Input() apuList: any[] = [];
  
  idCompany: number | undefined;
  timeHr = timeHr;
  timeMin = timeMin;
  
  ngOnInit(): void {
    this.setDefaultSessionForm();
  }

  // general
  onChangeGeneralForm(section: string): void {
    if (section == 'nameofArea') {
      // set default company
      const itemAPU = this.areaList.find(_item => _item.id == this.generalForm.value.id_unit_no);
      this.generalForm.patchValue({
        id_company: itemAPU.id_company
      });
    }
  }

  // session
  setDefaultSessionForm(): void {
    const formattedDate = new Date().toISOString().split('T')[0];
    this.sessionForm.controls.forEach((formGroup: FormGroup) => {
      formGroup.patchValue({
        meeting_date: formattedDate
      });
    });
  }

  onChangeSessionForm(section: string, index: number): void {
    if (section = 'startTime') {
      const startTime = this.formatMeetingTime(
        this.sessionForm.value[index].meeting_date, 
        this.sessionForm.value[index].meeting_start_time_hh,
        this.sessionForm.value[index].meeting_start_time_mm,
        index,
        section
      );
      this.sessionForm.controls[index].patchValue({
        meeting_start_time: startTime
      });
    }
    if (section = 'endTime') {
      const endTime = this.formatMeetingTime(
        this.sessionForm.value[index].meeting_date, 
        this.sessionForm.value[index].meeting_end_time_hh,
        this.sessionForm.value[index].meeting_end_time_mm,
        index,
        section
      );
      this.sessionForm.controls[index].patchValue({
        meeting_end_time: endTime
      });
    }
    console.log( this.sessionForm.value)
  }

  onDeleteSession(index: number) {
    if(index != 0) 
      return this.sessionForm.removeAt(index);

    const firstGroup = this.sessionForm.at(0) as FormGroup;
    firstGroup.patchValue({
      member_team: [[]],
      // meetingDate: '',
      // startDateHr: '',
      // startDateMin: '',
      // endDateHr: '',
      // endDateMin: '',
    });
  }

  onCopySession(index: number) {
    const session = this.sessionForm.at(index).value;
    const copiedSession = {
      ...session, 
      member_team: [[...session.member_team]]         
    };
    
    this.sessionForm.insert(index + 1, this.fb.group(copiedSession));
    console.log(this.sessionForm.value)
  }

  onAddSession(index: number) {
    const session = this.sessionForm.at(index);

    if(!session) return console.log('session form not found!')
    
    const newSession = resetFormGroup({...session})
    this.sessionForm.insert(index + 1, this.fb.group({...newSession, member_team: [[]]}));
    console.log( this.sessionForm.value)
  }

  formatMeetingTime(date: string, hours: string, minutes: string, index: number, section: string) {
    let formattedHours = hours ? hours : '00';
    let formattedMinutes = minutes ? minutes : '00';

    if (parseInt(formattedHours) >= 0 && parseInt(formattedHours) < 10) {
      formattedHours = formattedHours.padStart(2, '0');
    }
    if (parseInt(formattedMinutes) >= 0 && parseInt(formattedMinutes) < 10) {
      formattedMinutes = formattedMinutes.padStart(2, '0');
    }

    // if (formattedHours == '00' || formattedMinutes == '00') {
    //   if (section = 'startTime') {
    //     this.sessionForm.controls[index].patchValue({
    //       meeting_start_time_hh: formattedHours,
    //       meeting_start_time_mm: formattedMinutes
    //     });
    //   }
    //   if (section = 'endTime') {
    //     this.sessionForm.controls[index].patchValue({
    //       meeting_end_time_hh: formattedHours,
    //       meeting_end_time_mm: formattedMinutes
    //     });
    //   }
    // }

    return `${date}T${formattedHours}:${formattedMinutes}:00.000Z`;
  }

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(ModalMemberTeamComponent, {
      panelClass: 'member-dialog',
      data: this.sessionForm.value[index].member_team
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // คุณสามารถจัดการผลลัพธ์หลังจากโมดัลปิดได้ที่นี่
    });
  }
}
