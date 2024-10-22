export class Approver {
    id: number | null;
    seq: number | null;
    no: number | null;
    id_pha: number | null;
    comment: string | null;
    approver_type: string | null;
    user_img: string | null;
    user_name: string | null;
    create_by: string | null;
    update_by: string | null;
    id_session: number | null;
    user_title: string | null;
    create_date: string | null;
    update_date: string | null;
    date_review: string | null;
    date_review_show: string | null;
    action_type: string | null;
    action_change: number | null;
    action_review: string | null;
    user_displayname: string | null;
    approver_action_type: string | null;
    action_status: string | null;
    
    constructor(
      id: number | null,
      seq: number | null,
      no: number | null,
      id_pha: number | null,
      id_session: number | null,
      comment: string | null,
      approver_type: string | null,
      action_type: string | null,
      action_change: number | null,
      date_review: string | null,
      date_review_show: string | null,
      action_review: string | null,
      approver_action_type: string | null,
      action_status: string | null,
      create_by: string | null,
      update_by: string | null,
      create_date: string | null,
      update_date: string | null,
      user_title: string | null,
      user_img: string | null,
      user_name: string | null,
      user_displayname: string | null,
    ) {
      this.id = id;
      this.no = no;
      this.seq = seq;
      this.id_pha = id_pha;
      this.comment = comment;
      this.approver_type = approver_type;
      this.user_img = user_img;
      this.user_name = user_name;
      this.create_by = create_by;
      this.update_by = update_by;
      this.id_session = id_session;
      this.user_title = user_title;
      this.approver_action_type = approver_action_type;
      this.action_status = action_status;
      this.create_date = create_date;
      this.update_date = update_date;
      this.date_review = date_review;
      this.date_review_show = date_review_show;
      this.action_type = action_type;
      this.action_change = action_change;
      this.action_review = action_review;
      this.user_displayname = user_displayname;
    }
  }
  