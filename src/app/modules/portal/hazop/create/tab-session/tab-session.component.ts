import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { timeHr, timeMin } from '../../../../../core/data/dataMaster';
import { ModalMemberTeamComponent } from '../../../../../components/modals/modal-member-team/modal-member-team.component';
import { MatDialog } from '@angular/material/dialog';
import { resetFormGroup } from '../../../../../core/utils/form-groups';

@Component({
  selector: 'app-tab-session',
  templateUrl: './tab-session.component.html',
  styleUrl: './tab-session.component.scss'
})
export class TabSessionComponent {

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ){}

  @Input() sessionForm: FormGroup| any;

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

  openDialog(index: number): void{
    const dialogRef = this.dialog.open(ModalMemberTeamComponent, {
      panelClass: 'member-dialog',
      data: this.sessionForm.value[index].member_team
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // คุณสามารถจัดการผลลัพธ์หลังจากโมดัลปิดได้ที่นี่
    });
  }

  onAddSession(index: number): void{
    const session = this.sessionForm.at(index);
    if(!session) return console.log('session form not found!')
    const newSession = resetFormGroup({...session})
    this.sessionForm.insert(index + 1, this.fb.group({...newSession, member_team: [[]]}));
    console.log( this.sessionForm.value)
  }

  onDeleteSession(index: number): void{
    
  }

  onCopySession(index: number): void{

  }
}
