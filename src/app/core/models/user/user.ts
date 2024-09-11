export class User {
  user_id: string;
  user_img: string;
  role_type: string;
  user_name: string;
  user_email: string;
  user_displayname: string;

    constructor(
      user_id: string,
      user_img: string,
      role_type: string,
      user_name: string,
      user_email: string,
      user_displayname: string,
    ){
      this.user_id = user_id;
      this.user_img = user_img;
      this.role_type = role_type;
      this.user_name = user_name;
      this.user_email = user_email;
      this.user_displayname = user_displayname;
    }
}
