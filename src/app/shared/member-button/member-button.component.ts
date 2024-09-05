import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MemberTeam } from '../../core/models/member-team-model/member-team.model';
import { Employee } from '../../core/models/employee-model/employee.model';

@Component({
  selector: 'app-member-button',
  templateUrl: './member-button.component.html',
  styleUrl: './member-button.component.scss'
})
export class MemberButtonComponent {
  @Input() label: string = '';
  @Input() data: Employee[] = [];
  @Output() outClick = new EventEmitter<void>();

  onClick() {
    this.outClick.emit(); // ส่ง Event เมื่อคลิกปุ่ม
  }
}
