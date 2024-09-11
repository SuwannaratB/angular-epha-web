export class LoginReq {
  emp_id: string;
    user_name: string;
    user_pass: string;

    constructor(emp_id: string, user_name: string, user_pass: string){
      this.emp_id = emp_id;
      this.user_name = user_name;
      this.user_pass = user_pass;
    }
  }