export class FollowUp {
  no: number;
  pha_sub_software: string;
  pha_seq: number;
  pha_no: string;
  pha_request_name: string;
  responder_user_displayname: string;
  responder_user_name_check: string;
  status_total: number;
  status_open: number;
  status_closed: number;
  status_closed_with: number;
  status_responed: number;
  data_by: string;
  responder_user_name: string;
  pha_status: number;
  pha_status_name: string;
  action_type: string;
  action_change: number;

  constructor(
    no: number,
    pha_sub_software: string,
    pha_seq: number,
    pha_no: string,
    pha_request_name: string,
    responder_user_displayname: string,
    responder_user_name_check: string,
    status_total: number,
    status_open: number,
    status_closed: number,
    status_closed_with: number,
    status_responed: number,
    data_by: string,
    responder_user_name: string,
    pha_status: number,
    pha_status_name: string,
    action_type: string,
    action_change: number,
  ){
    this.no = no;
    this.pha_sub_software = pha_sub_software;
    this.pha_seq = pha_seq;
    this.pha_no = pha_no;
    this.pha_request_name = pha_request_name;
    this.responder_user_displayname = responder_user_displayname;
    this.responder_user_name_check = responder_user_name_check;
    this.status_total = status_total;
    this.status_open = status_open;
    this.status_closed = status_closed;
    this.status_closed_with = status_closed_with;
    this.status_responed = status_responed;
    this.data_by = data_by;
    this.responder_user_name = responder_user_name;
    this.pha_status = pha_status;
    this.pha_status_name = pha_status_name;
    this.action_type = action_type;
    this.action_change = action_change;
  }
}
