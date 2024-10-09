export class TokenRes {
  csrfToken: string;
  
    constructor(csrfToken: string){
      this.csrfToken = csrfToken;
    }
  }