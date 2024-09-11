export class TokenReq {
    userId: string;
    userPassword: string;
  
    constructor(userId: string, userPassword: string){
      this.userId = userId;
      this.userPassword = userPassword;
    }
  }