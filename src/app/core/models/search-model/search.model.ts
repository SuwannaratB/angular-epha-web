export class Search {
    pha_status_name: string;
    pha_status_displayname: string;
    request_user_name: string;
    request_user_displayname: string;
    approver_user_img: string;
    action_type: string;
    action_change: number;
    emp_active_search: string;
    worksheet_active_search: string;
    id_request_type: number;
    request_type: string;
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
    safety_critical_equipment_show: number;
    approve_status: string;
    flow_mail_to_member: string;
    next_version: string;
    pha_version_desc: string;
    pha_version_text: string;
    pha_status_comment: string;
    seq1: number;
    id_pha: number;
    id1: number;
    id_ram: number;
    expense_type: string;
    sub_expense_type: string;
    reference_moc: string;
    id_area: number;
    id_apu: number;
    id_business_unit: number;
    id_unit_no: number;
    other_area: string;
    other_apu: string;
    other_business_unit: string;
    other_unit_no: string;
    functional_location: string;
    target_start_date: string;
    target_end_date: string;
    actual_start_date: string;
    actual_end_date: string;
    descriptions: string;
    create_date1: string;
    update_date1: string;
    create_by1: string;
    update_by1: string;
    pha_request_name: string;
    work_scope: string;
    other_functional_location: string;
    file_upload_size: number;
    file_upload_name: string;
    file_upload_path: string;
    input_type_excel: string;
    id_toc: number;
    id_tagid: number;
    tagid_audition: string;
    review_folow_comment: string;
    types_of_hazard: number;
    id_department: number;
    id_company: number;
    id_request_type1: number;
    id_departments: number;
    id_sections: number;
    mandatory_note: string;
  
    constructor(
      pha_status_name: string,
      pha_status_displayname: string,
      request_user_name: string,
      request_user_displayname: string,
      approver_user_img: string,
      action_type: string,
      action_change: number,
      emp_active_search: string,
      worksheet_active_search: string,
      id_request_type: number,
      request_type: string,
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
      safety_critical_equipment_show: number,
      approve_status: string,
      flow_mail_to_member: string,
      next_version: string,
      pha_version_desc: string,
      pha_version_text: string,
      pha_status_comment: string,
      seq1: number,
      id_pha: number,
      id1: number,
      id_ram: number,
      expense_type: string,
      sub_expense_type: string,
      reference_moc: string,
      id_area: number,
      id_apu: number,
      id_business_unit: number,
      id_unit_no: number,
      other_area: string,
      other_apu: string,
      other_business_unit: string,
      other_unit_no: string,
      functional_location: string,
      target_start_date: string,
      target_end_date: string,
      actual_start_date: string,
      actual_end_date: string,
      descriptions: string,
      create_date1: string,
      update_date1: string,
      create_by1: string,
      update_by1: string,
      pha_request_name: string,
      work_scope: string,
      other_functional_location: string,
      file_upload_size: number,
      file_upload_name: string,
      file_upload_path: string,
      input_type_excel: string,
      id_toc: number,
      id_tagid: number,
      tagid_audition: string,
      review_folow_comment: string,
      types_of_hazard: number,
      id_department: number,
      id_company: number,
      id_request_type1: number,
      id_departments: number,
      id_sections: number,
      mandatory_note: string,
    ) {
      this.pha_status_name = pha_status_name;
      this.pha_status_displayname = pha_status_displayname;
      this.request_user_name = request_user_name;
      this.request_user_displayname = request_user_displayname;
      this.approver_user_img = approver_user_img;
      this.action_type = action_type;
      this.action_change = action_change;
      this.emp_active_search = emp_active_search;
      this.worksheet_active_search = worksheet_active_search;
      this.id_request_type = id_request_type;
      this.request_type = request_type;
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
      this.seq1 = seq1;
      this.id_pha = id_pha;
      this.id1 = id1;
      this.id_ram = id_ram;
      this.expense_type = expense_type;
      this.sub_expense_type = sub_expense_type;
      this.reference_moc = reference_moc;
      this.id_area = id_area;
      this.id_apu = id_apu;
      this.id_business_unit = id_business_unit;
      this.id_unit_no = id_unit_no;
      this.other_area = other_area;
      this.other_apu = other_apu;
      this.other_business_unit = other_business_unit;
      this.other_unit_no = other_unit_no;
      this.functional_location = functional_location;
      this.target_start_date = target_start_date;
      this.target_end_date = target_end_date;
      this.actual_start_date = actual_start_date;
      this.actual_end_date = actual_end_date;
      this.descriptions = descriptions;
      this.create_date1 = create_date1;
      this.update_date1 = update_date1;
      this.create_by1 = create_by1;
      this.update_by1 = update_by1;
      this.pha_request_name = pha_request_name;
      this.work_scope = work_scope;
      this.other_functional_location = other_functional_location;
      this.file_upload_size = file_upload_size;
      this.file_upload_name = file_upload_name;
      this.file_upload_path = file_upload_path;
      this.input_type_excel = input_type_excel;
      this.id_toc = id_toc;
      this.id_tagid = id_tagid;
      this.tagid_audition = tagid_audition;
      this.review_folow_comment = review_folow_comment;
      this.types_of_hazard = types_of_hazard;
      this.id_department = id_department;
      this.id_company = id_company;
      this.id_request_type1 = id_request_type1;
      this.id_departments = id_departments;
      this.id_sections = id_sections;
      this.mandatory_note = mandatory_note;
    }
  }
  