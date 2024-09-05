import { MemberTeam } from "../member-team-model/member-team.model";

export class HraSession {
    seq: number;
    id_pha: number;
    id: number;
    member_team: MemberTeam[]; // ตอน save ไม่ต้องส่ง key นี้ไป
    meeting_date: string;
    meeting_start_time: string;
    meeting_end_time: string;
    create_date: string;
    update_date: string;
    create_by: string;
    update_by: string;
    no: number;
    date_to_review: string;
    action_to_review: string;
    active_type: string;
    date_approve_moc: string;
    action_to_approve_moc: string;
    date_to_approve_moc: string;
    note_to_approver: string;
    no1: number;
    action_type: string;
    action_change: number;
    date_to_approve_moc_text: string;
    date_approve_moc_text: string;
    meeting_start_time_hh: string;
    meeting_start_time_mm: string;
    meeting_end_time_hh: string;
    meeting_end_time_mm: string;
    action_new_row: number;  
    
    constructor(    
      seq: number,
      id_pha: number,
      id: number,
      member_team: MemberTeam[],
      meeting_date: string,
      meeting_start_time: string,
      meeting_end_time: string,
      create_date: string,
      update_date: string,
      create_by: string,
      update_by: string,
      no: number,
      date_to_review: string,
      action_to_review: string,
      active_type: string,
      date_approve_moc: string,
      action_to_approve_moc: string,
      date_to_approve_moc: string,
      note_to_approver: string,
      no1: number,
      action_type: string,
      action_change: number,
      date_to_approve_moc_text: string,
      date_approve_moc_text: string,
      meeting_start_time_hh: string,
      meeting_start_time_mm: string,
      meeting_end_time_hh: string,
      meeting_end_time_mm: string,
      action_new_row: number,  
    ) {
      this.seq = seq;
      this.id_pha = id_pha;
      this.id = id;
      this.member_team = member_team;
      this.meeting_date = meeting_date;
      this.meeting_start_time = meeting_start_time;
      this.meeting_end_time = meeting_end_time;
      this.create_date = create_date;
      this.update_date = update_date;
      this.create_by = create_by;
      this.update_by = update_by;
      this.no = no;
      this.date_to_review = date_to_review;
      this.action_to_review = action_to_review;
      this.active_type = active_type;
      this.date_approve_moc = date_approve_moc;
      this.action_to_approve_moc = action_to_approve_moc;
      this.date_to_approve_moc = date_to_approve_moc;
      this.note_to_approver = note_to_approver;
      this.no1 = no1;
      this.action_type = action_type;
      this.action_change = action_change;
      this.date_to_approve_moc_text = date_to_approve_moc_text;
      this.date_approve_moc_text = date_approve_moc_text;
      this.meeting_start_time_hh = meeting_start_time_hh;
      this.meeting_start_time_mm = meeting_start_time_mm;
      this.meeting_end_time_hh = meeting_end_time_hh;
      this.meeting_end_time_mm = meeting_end_time_mm;
      this.action_new_row = action_new_row;  
    }
  }
  