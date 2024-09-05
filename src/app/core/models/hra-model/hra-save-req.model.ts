import { HraGeneral } from "./hra-general.model";

export class HraSaveReq {
  token_doc: string;
  pha_status: string;
  pha_version: string;
  action_part: string;
  user_name: string;
  json_header: string;
  json_general: string;
  json_session: string;
  json_memberteam: string;
  json_approver: string;
  json_relatedpeople_outsider: string;
  json_drawing: string;
  json_subareas: string;
  json_hazard: string;
  json_tasks: string;
  json_descriptions: string;
  json_workers: string;
  json_worksheet: string;
  json_recommendations: string;
  flow_action: string;

  constructor(
    user_name: string, 
    token_doc: string, 
    pha_status: string, 
    pha_version: string,
    action_part: string,
    json_header: string,
    json_general: string,
    json_session: string,
    json_memberteam: string,
    json_approver: string,
    json_relatedpeople_outsider: string,
    json_drawing: string,
    json_subareas: string,
    json_hazard: string,
    json_tasks: string,
    json_descriptions: string,
    json_workers: string,
    json_worksheet: string,
    json_recommendations: string,
    flow_action: string
  ){
    this.user_name = user_name;
    this.token_doc = token_doc;
    this.pha_status = pha_status;
    this.pha_version = pha_version;
    this.action_part = action_part;
    this.json_header = json_header;
    this.json_general = json_general;
    this.json_session = json_session;
    this.json_memberteam = json_memberteam;
    this.json_approver = json_approver;
    this.json_relatedpeople_outsider = json_relatedpeople_outsider;
    this.json_drawing = json_drawing;
    this.json_subareas = json_subareas;
    this.json_hazard = json_hazard;
    this.json_tasks = json_tasks;
    this.json_descriptions = json_descriptions;
    this.json_workers = json_workers;
    this.json_worksheet = json_worksheet;
    this.json_recommendations = json_recommendations;
    this.flow_action = flow_action;
  }
}
