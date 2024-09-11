export class LoginRes {
    user_name: string;
    role_type: string;
    page: string;
    seq: string;
  
    constructor(user_name: string, role_type: string, page: string, seq: string){
      this.user_name = user_name;
      this.role_type = role_type;
      this.page = page;
      this.seq = seq;
    }
  }