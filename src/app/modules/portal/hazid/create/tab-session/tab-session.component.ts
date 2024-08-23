import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalMemberTeamComponent } from '../../../../../components/modals/modal-member-team/modal-member-team.component';

@Component({
  selector: 'app-tab-session',
  templateUrl: './tab-session.component.html',
  styleUrl: './tab-session.component.scss'
})
export class TabSessionComponent {
  constructor(
    public dialog: MatDialog
  ) {}

  onDeleteClick() {
    console.log('Delete button clicked');
    // เขียนโค้ดเพื่อจัดการกับการลบ
  }

  onCopyClick() {
    console.log('Copy button clicked');
    // เขียนโค้ดเพื่อจัดการกับการคัดลอก
  }

  onAddClick() {
    console.log('Add button clicked');
    // เขียนโค้ดเพื่อจัดการกับการเพิ่ม
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalMemberTeamComponent, {
      width: '80vw',
      data: { /* ข้อมูลที่คุณต้องการส่งไปยังโมดัล */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // คุณสามารถจัดการผลลัพธ์หลังจากโมดัลปิดได้ที่นี่
    });
  }
}
