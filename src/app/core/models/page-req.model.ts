export class PageReq {
  sub_software: string;
  token_doc: string;
  type_doc: string;
  user_name: string;
  // row_type: string;

  constructor(
    sub_software: string, 
    token_doc: string, 
    type_doc: string, 
    user_name: string, 
    // row_type: string
  ){
    this.sub_software = sub_software;
    this.token_doc = token_doc;
    this.type_doc = type_doc;
    this.user_name = user_name;
    // this.row_type = row_type;
  }
}