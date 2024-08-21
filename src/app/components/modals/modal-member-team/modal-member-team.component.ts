import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-member-team',
  templateUrl: './modal-member-team.component.html',
  styleUrl: './modal-member-team.component.scss'
})
export class ModalMemberTeamComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalMemberTeamComponent>,
  ){}

  onClose(): void {
    this.dialogRef.close();
  }
}
