import { AuthorizationPage } from "./authorization-page.model";
import { Search } from "./search.model";

export class SearchRes {
    apu: string;
    status: string;
    unit_no: string;
    results: Search[];
    approver: string;
    conditions: string;
    subsoftware: string;
    business_unit: string;
    authorization_page: string;
    authorization_page_by_doc: AuthorizationPage[];
  
    constructor(
        apu: string, 
        status: string, 
        unit_no: string, 
        results: Search[], 
        approver: string, 
        conditions: string, 
        subsoftware: string, 
        business_unit: string,
        authorization_page: string, 
        authorization_page_by_doc: AuthorizationPage[],
    ){
        this.apu = apu;
        this.status = status;
        this.unit_no = unit_no;
        this.results = results;
        this.approver = approver;
        this.conditions = conditions;
        this.subsoftware = subsoftware;
        this.business_unit = business_unit;
        this.authorization_page = authorization_page;
        this.authorization_page_by_doc = authorization_page_by_doc;
    }
  }