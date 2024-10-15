
export class AuthorizationPage {
    page_controller: string;
    user_name: string;;
  
    constructor(
        page_controller: string, 
        user_name: string, 
    ){
        this.page_controller = page_controller;
        this.user_name = user_name;
    }
  }