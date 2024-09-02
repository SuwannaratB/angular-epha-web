import { Component, Input } from '@angular/core';
import { ModalMemberTeamComponent } from '../../../../../components/modals/modal-member-team/modal-member-team.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab-general',
  templateUrl: './tab-general.component.html',
  styleUrl: './tab-general.component.scss'
})
export class TabGeneralComponent {

  @Input() sessionForm: FormGroup| any

  constructor(
    public dialog: MatDialog,
    private fb:FormBuilder
  ) {}

  //  session
  openDialog(index: number): void {
    const dialogRef = this.dialog.open(ModalMemberTeamComponent, {
      panelClass: 'member-dialog',
      // data: this.sessionForm.value[index].memberTeam
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // คุณสามารถจัดการผลลัพธ์หลังจากโมดัลปิดได้ที่นี่
    });
  }

  onDeleteSession(index: number) {
    if(index != 0) 
      return  this.sessionForm.removeAt(index);

    const firstGroup = this.sessionForm.at(0) as FormGroup;
    firstGroup.patchValue({
      memberTeam: [],
      meetingDate: '',
      startDateHr: '',
      startDateMin: '',
      endDateHr: '',
      endDateMin: '',
    });
  }

  onCopyClick() {
    console.log('Copy button clicked');
    // เขียนโค้ดเพื่อจัดการกับการคัดลอก
  }

  onAddSession(index: number) {
    const newData = this.fb.group({ 
      memberTeam: [[]], 
      meetingDate: [''],
      startDateHr: [''],
      startDateMin: [''],
      endDateHr: [''],
      endDateMin: [''],
    });

    this.sessionForm.insert(index + 1, newData);
  }
}
