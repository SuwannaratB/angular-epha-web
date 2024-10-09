export class HraSubArea {
  id: number;
  no: number;
  seq: number;
  id_pha: number;
  sub_area: string;
  create_by: string;
  update_by: string;
  index_rows: number;
  create_date: string;
  action_type: string;
  update_date: string;
  id_sub_area: number;
  work_of_task: string;
  action_change: number;
  id_business_unit: number;

  constructor(
      id: number,
      no: number,
      seq: number,
      id_pha: number,
      sub_area: string,
      create_by: string,
      update_by: string,
      index_rows: number,
      create_date: string,
      action_type: string,
      update_date: string,
      id_sub_area: number,
      work_of_task: string,
      action_change: number,
      id_business_unit: number,
  ) {
      this.id = id;
      this.no = no;
      this.seq = seq;
      this.id_pha = id_pha;
      this.sub_area = sub_area;
      this.update_by = update_by;
      this.create_by = create_by;
      this.index_rows = index_rows;
      this.create_date = create_date;
      this.update_date = update_date;
      this.action_type = action_type;
      this.id_sub_area = id_sub_area;
      this.work_of_task = work_of_task;
      this.action_change = action_change;
      this.id_business_unit = id_business_unit;
  }
}
