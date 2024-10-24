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
import { deleteDataArray } from '../../../core/utils/function';
import { Header } from '../../../core/models/header-model/header.model';
import { HazopSession } from '../../../core/models/hazop-model/hazop-session.model';
import { HraSession } from '../../../core/models/hra-model/hra-session.model';

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
    @Inject(MAT_DIALOG_DATA) public data: { 
      session: HazopSession | HraSession,
      value: MemberTeam[]|Approver[], 
      type: string 
    }
  ){}

  header: Header | undefined;
  dataEmployee: Employee[] = [];
  searchForm: FormBuilder | any;
  listRemove: ( MemberTeam | Approver )[] = [];

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
            this.dataEmployee = value.employee.filter(item => item.id)
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
        this.data.session.id_pha,
        this.data.session.id,
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
        this.data.session.id_pha,
        this.data.session.id,
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

  onRemoveMember(id: number): void{
    if(!id) return console.log('id not found!');
    const delItem = this.data.value.find(item => item.id == id);
    if(!delItem) console.log('item remove not found!');
    this.listRemove.push(delItem!); 
    this.data.value = this.data.value.filter(item => item.id != id);
  }

  onClose(): void {
    const resultAfterRemove = deleteDataArray(this.listRemove, this.data.type);
    this.dialogRef.close({
      data: this.data.value,
      remove: resultAfterRemove,
      type: this.data.type
    });
  }
}
