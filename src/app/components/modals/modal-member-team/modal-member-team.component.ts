import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../../../core/models/employee-model/employee.model';
import { FormBuilder } from '@angular/forms';
import { EmployeeReq } from '../../../core/models/employee-model/employee-req.model';
import { EmployeeService } from '../../../core/services/employee-service/employee.service';
import { LoadingService } from '../../../core/services/loading-service/loading.service';
import { MemberTeam } from '../../../core/models/member-team-model/member-team.model';
import { MaxService } from '../../../core/services/max-service/max.service';
import { Approver } from '../../../core/models/member-team-model/approver.model';

@Component({
  selector: 'app-modal-member-team',
  templateUrl: './modal-member-team.component.html',
  styleUrl: './modal-member-team.component.scss'
})
export class ModalMemberTeamComponent implements OnInit {

  constructor(
    private _employeeService: EmployeeService,
    private _loadingService: LoadingService,
    private maxService: MaxService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalMemberTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { value: MemberTeam[]|Approver[], type: string } // รับข้อมูลที่ถูกส่งเข้ามา
  ){}

  dataEmployee: Employee[] = [];
  searchForm: FormBuilder | any;

  ngOnInit(): void {
    this.initSearchForm();
    // this.fetchEmployee()
  }

  initSearchForm(): void{
    this.searchForm = this.fb.group({
      indicator: [''],
    })
  }

  fetchEmployee(data: EmployeeReq): void{
    this._loadingService.showLoading().subscribe({
      next: () => {
        this._employeeService.getEmployee(data).subscribe({
          next: (value) => {
            this.dataEmployee = value.employee
          },
          error: (err) => {
            this._loadingService.closeLoading();
          },
          complete: () => {
            this._loadingService.closeLoading();
          }
        })
      },
      error: (err) => {
        this._loadingService.closeLoading();
      },
    });
  }

  onChangeSearch(event: string): void{
    if(event.length < 3) {
      this.dataEmployee = [];
      return ;
    }

    const data = {
      user_indicator: event,
      max_rows: "50"
    }

    this.fetchEmployee(data);
  }

  onAddMember(item: any): void{
    if (this.data.type === 'member_team') {
      const maxSeq = this.maxService.getMax('memberteam');
      if(!maxSeq) return console.log('max seq not found!');
      const newMember = new MemberTeam(
        maxSeq,
        maxSeq,
        this.data.value[0].id_pha,
        this.data.value[0].id_session,
        null,
        1,
        'insert',
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        item.employee_position,
        item.employee_img,
        item.employee_name,
        item.employee_displayname,
      )
      this.maxService.updateMax('approver', maxSeq + 1);
      (this.data.value as MemberTeam[]).push(newMember);
    }

    if (this.data.type === 'approver'){
      const maxSeq = this.maxService.getMax('approver');
      if(!maxSeq) return console.log('max seq not found!')
      const newApprover = new Approver(
        maxSeq,
        maxSeq,
        null,
        this.data.value[0].id_pha,
        this.data.value[0].id_session,
        null,
        'approver',
        'insert',
        1,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        item.employee_position,
        item.employee_img,
        item.employee_name,
        item.employee_displayname,
      )
      this.maxService.updateMax('approver', maxSeq + 1);
      (this.data.value as Approver[]).push(newApprover);
    }

    console.log(this.data.value)
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
