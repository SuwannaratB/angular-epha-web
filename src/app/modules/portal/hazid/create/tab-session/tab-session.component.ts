import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalMemberTeamComponent } from '../../../../../components/modals/modal-member-team/modal-member-team.component';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab-session',
  templateUrl: './tab-session.component.html',
  styleUrl: './tab-session.component.scss'
})
export class TabSessionComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private fb:FormBuilder
  ) {}

  @Input() sessionForm: FormGroup| any

  ngOnInit(): void {

  }

  onDeleteSession(index: number) {
    this.sessionForm.removeAt(index);
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

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(ModalMemberTeamComponent, {
      panelClass: 'member-dialog',
      data: this.sessionForm.value[index].memberTeam
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // คุณสามารถจัดการผลลัพธ์หลังจากโมดัลปิดได้ที่นี่
    });
  }
}
