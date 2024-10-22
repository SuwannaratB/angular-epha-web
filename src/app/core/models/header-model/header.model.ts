export class Header {
    request_user_name: string;
    request_user_displayname: string;
    approver_user_img: string;
    id: number;
    year: number;
    pha_no: string;
    pha_version: number;
    pha_status: number;
    pha_request_by: string;
    pha_sub_software: string;
    request_approver: number;
    approver_user_name: string;
    approver_user_displayname: string;
    approve_action_type: string;
    approve_comment: string;
    create_date: string;
    update_date: string;
    create_by: string;
    update_by: string;
    request_user_name1: string;
    request_user_displayname1: string;
    seq: number;
    safety_critical_equipment_show: any;
    approve_status: any;
    flow_mail_to_member: number;
    next_version: any;
    pha_version_desc: string;
    pha_version_text: string;
    pha_status_comment: any;
    pha_status_name: string;
    pha_status_displayname: string;
    pha_version_text1: string;
    pha_version_desc1: string;
    action_type: string;
    action_change: number;
    active_notification: number;
  
    constructor(    
        request_user_name: string,
        request_user_displayname: string,
        approver_user_img: string,
        id: number,
        year: number,
        pha_no: string,
        pha_version: number,
        pha_status: number,
        pha_request_by: string,
        pha_sub_software: string,
        request_approver: number,
        approver_user_name: string,
        approver_user_displayname: string,
        approve_action_type: string,
        approve_comment: string,
        create_date: string,
        update_date: string,
        create_by: string,
        update_by: string,
        request_user_name1: string,
        request_user_displayname1: string,
        seq: number,
        safety_critical_equipment_show: any,
        approve_status: any,
        flow_mail_to_member: number,
        next_version: any,
        pha_version_desc: string,
        pha_version_text: string,
        pha_status_comment: any,
        pha_status_name: string,
        pha_status_displayname: string,
        pha_version_text1: string,
        pha_version_desc1: string,
        action_type: string,
        action_change: number,
        active_notification: number,
    ){
        this.request_user_name = request_user_name;
        this.request_user_displayname = request_user_displayname;
        this.approver_user_img = approver_user_img;
        this.id = id;
        this.year = year;
        this.pha_no = pha_no;
        this.pha_version = pha_version;
        this.pha_status = pha_status;
        this.pha_request_by = pha_request_by;
        this.pha_sub_software = pha_sub_software;
        this.request_approver = request_approver;
        this.approver_user_name = approver_user_name;
        this.approver_user_displayname = approver_user_displayname;
        this.approve_action_type = approve_action_type;
        this.approve_comment = approve_comment;
        this.create_date = create_date;
        this.update_date = update_date;
        this.create_by = create_by;
        this.update_by = update_by;
        this.request_user_name1 = request_user_name1;
        this.request_user_displayname1 = request_user_displayname1;
        this.seq = seq;
        this.safety_critical_equipment_show = safety_critical_equipment_show;
        this.approve_status = approve_status;
        this.flow_mail_to_member = flow_mail_to_member;
        this.next_version = next_version;
        this.pha_version_desc = pha_version_desc;
        this.pha_version_text = pha_version_text;
        this.pha_status_comment = pha_status_comment;
        this.pha_status_name = pha_status_name;
        this.pha_status_displayname = pha_status_displayname;
        this.pha_version_text1 = pha_version_text1;
        this.pha_version_desc1 = pha_version_desc1;
        this.action_type = action_type;
        this.action_change = action_change;
        this.active_notification = active_notification;
    }
  }