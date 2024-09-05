export class MemberTeam {
  id: number;
  no: number;
  seq: number;
  id_pha: number;
  comment: string;
  user_img: string;
  user_name: string;
  create_by: string;
  update_by: string;
  id_session: number;
  user_title: string;
  create_date: string;
  update_date: string;
  date_review: string;
  action_type: string;
  action_change: number;
  action_review: string;
  user_displayname: string;
  
  constructor(
    id: number,
    no: number,
    seq: number,
    id_pha: number,
    comment: string,
    user_img: string,
    user_name: string,
    create_by: string,
    update_by: string,
    id_session: number,
    user_title: string,
    create_date: string,
    update_date: string,
    date_review: string,
    action_type: string,
    action_change: number,
    action_review: string,
    user_displayname: string,
  ) {
    this.id = id;
    this.no = no;
    this.seq = seq;
    this.id_pha = id_pha;
    this.comment = comment;
    this.user_img = user_img;
    this.user_name = user_name;
    this.create_by = create_by;
    this.update_by = update_by;
    this.id_session = id_session;
    this.user_title = user_title;
    this.create_date = create_date;
    this.update_date = update_date;
    this.date_review = date_review;
    this.action_type = action_type;
    this.action_change = action_change;
    this.action_review = action_review;
    this.user_displayname = user_displayname;
  }
}
