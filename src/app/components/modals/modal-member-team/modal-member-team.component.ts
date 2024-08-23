import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../../services/employee-service/employee.service';
import { LoadingService } from '../../../services/loading-service/loading.service';
import { Employee } from '../../../models/employee-model/employee.model';

@Component({
  selector: 'app-modal-member-team',
  templateUrl: './modal-member-team.component.html',
  styleUrl: './modal-member-team.component.scss'
})
export class ModalMemberTeamComponent implements OnInit {

  constructor(
    private _employeeService: EmployeeService,
    private _loadingService: LoadingService,
    public dialogRef: MatDialogRef<ModalMemberTeamComponent>,
  ){}

  dataEmployee: Employee[] = [];

  ngOnInit(): void {
    this.fetchEmployee()
  }

  fetchEmployee(): void{
    const data = {
      user_indicator: "sas",
      max_rows: "50"
    }
    this._loadingService.showLoading().subscribe({
      next: () => {
        this._employeeService.getEmployee(data).subscribe({
          next: (value) => {
            this.dataEmployee = value.employee
          },
          error: (err) => {
            this._loadingService.closeLoading();
            alert('Error fetching data:')
          },
          complete: () => {
            this._loadingService.closeLoading();
          }
        })
      },
      error: (err) => {
        this._loadingService.closeLoading();
        alert('Error showLoading')
      },
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
