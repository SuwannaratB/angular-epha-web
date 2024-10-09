export class HraHazard {
    seq: number;
    id_pha: number;
    id: number;
    no: number;
    id_business_unit: number ;
    id_type_hazard: number ;
    id_health_hazard: number ;
    id_health_effect: number ;
    type_hazard: string ;
    health_hazard: string ;
    health_effect_rating: string ;
    tlv_standard: string ;
    create_date: string ;
    update_date: string ;
    create_by: string;
    update_by: string ;
    id_subareas: number;
    sub_area: string ;
    work_of_task: string ;
    no_subareas: string ;
    type_hazard_no: string ;
    no_type_hazard: number ;
    action_type: string;
    action_change: number;
    index_rows: number;
  
    constructor(
      seq: number,
      id_pha: number,
      id: number,
      no: number,
      id_business_unit: number ,
      id_type_hazard: number ,
      id_health_hazard: number ,
      id_health_effect: number ,
      type_hazard: string ,
      health_hazard: string ,
      health_effect_rating: string ,
      tlv_standard: string ,
      create_date: string ,
      update_date: string ,
      create_by: string,
      update_by: string ,
      id_subareas: number,
      sub_area: string ,
      work_of_task: string ,
      no_subareas: string ,
      type_hazard_no: string ,
      no_type_hazard: number ,
      action_type: string,
      action_change: number,
      index_rows: number
    ) {
      this.seq = seq;
      this.id_pha = id_pha;
      this.id = id;
      this.no = no;
      this.id_business_unit = id_business_unit;
      this.id_type_hazard = id_type_hazard;
      this.id_health_hazard = id_health_hazard;
      this.id_health_effect = id_health_effect;
      this.type_hazard = type_hazard;
      this.health_hazard = health_hazard;
      this.health_effect_rating = health_effect_rating;
      this.tlv_standard = tlv_standard;
      this.create_date = create_date;
      this.update_date = update_date;
      this.create_by = create_by;
      this.update_by = update_by;
      this.id_subareas = id_subareas;
      this.sub_area = sub_area;
      this.work_of_task = work_of_task;
      this.no_subareas = no_subareas;
      this.type_hazard_no = type_hazard_no;
      this.no_type_hazard = no_type_hazard;
      this.action_type = action_type;
      this.action_change = action_change;
      this.index_rows = index_rows;
    }
  }
  