export class EmployeeReq {
    max_rows: string;
    user_indicator: string;
    
    constructor(max_rows: string, user_indicator: string){
        this.max_rows = max_rows;
        this.user_indicator = user_indicator;
    }
  }

