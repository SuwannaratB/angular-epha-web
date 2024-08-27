import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../../services/employee-service/employee.service';
import { LoadingService } from '../../../services/loading-service/loading.service';
import { Employee } from '../../../models/employee-model/employee.model';
import { FormBuilder } from '@angular/forms';
import { EmployeeReq } from '../../../models/employee-model/employee-req.model';

@Component({
  selector: 'app-modal-member-team',
  templateUrl: './modal-member-team.component.html',
  styleUrl: './modal-member-team.component.scss'
})
export class ModalMemberTeamComponent implements OnInit {

  constructor(
    private _employeeService: EmployeeService,
    private _loadingService: LoadingService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalMemberTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee[] // รับข้อมูลที่ถูกส่งเข้ามา
  ){}

  dataEmployee: Employee[] = [];
  searchForm: FormBuilder | any;

  ngOnInit(): void {
    this.initSearchForm();
    console.log(this.data)
    // this.fetchEmployee()
  }

  initSearchForm(): void{
    this.searchForm = this.fb.group({
      indicator: ['enmc'],
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

  onAddMember(item: Employee): void{
    this.data.push(item)
    console.log(item)
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
