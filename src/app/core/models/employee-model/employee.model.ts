export class Employee {
    id: number;
    seq: number;
    employee_id: string;
    employee_img: string;
    selected_type: number;
    employee_type: string;
    employee_name: string;
    employee_email: string;
    employee_position: string;
    employee_displayname: string;
    
    constructor(
        id: number,
        seq: number,
        employee_id: string,
        employee_img: string,
        selected_type: number,
        employee_type: string,
        employee_name: string,
        employee_email: string,
        employee_position: string,
        employee_displayname: string,
    ){
        this.id = id;
        this.seq = seq;
        this.employee_id = employee_id;
        this.employee_img = employee_img;
        this.employee_name = employee_name;
        this.employee_type = employee_type;
        this.selected_type = selected_type;
        this.employee_email = employee_email;
        this.employee_position = employee_position;
        this.employee_displayname = employee_displayname;
    }
  }

