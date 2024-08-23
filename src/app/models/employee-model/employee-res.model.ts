import { Employee } from "./employee.model";

export class EmployeeRes {
    employee: Employee[];
    
    constructor(employee: Employee[]){
        this.employee = employee;
    }
  }

