export class HraGeneral {
    seq: number;
    id_pha: number;
    id: number;
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
    create_date: string;
    update_date: string;
    create_by: string;
    update_by: string;
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
    id_request_type: number;
    id_departments: string;
    id_sections: number;
    mandatory_note: string;
    functional_location_audition: string;
    tagid_audition_def: string;
    business_unit_name: string;
    unit_no_name: string;
    action_type: string;
    action_change: number;
  
    constructor(    
      seq: number,
      id_pha: number,
      id: number,
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
      create_date: string,
      update_date: string,
      create_by: string,
      update_by: string,
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
      id_request_type: number,
      id_departments: string,
      id_sections: number,
      mandatory_note: string,
      functional_location_audition: string,
      tagid_audition_def: string,
      business_unit_name: string,
      unit_no_name: string,
      action_type: string,
      action_change: number,
    ) {
      this.seq = seq;
      this.id_pha = id_pha;
      this.id = id;
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
      this.create_date = create_date;
      this.update_date = update_date;
      this.create_by = create_by;
      this.update_by = update_by;
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
      this.id_request_type = id_request_type;
      this.id_departments = id_departments;
      this.id_sections = id_sections;
      this.mandatory_note = mandatory_note;
      this.functional_location_audition = functional_location_audition;
      this.tagid_audition_def = tagid_audition_def;
      this.business_unit_name = business_unit_name;
      this.unit_no_name = unit_no_name;
      this.action_type = action_type;
      this.action_change = action_change;
    }
  }
  