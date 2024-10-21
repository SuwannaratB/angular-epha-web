import { UnitNo } from "../master_model/unit-no.model";
import { Ram } from "../ram-model/ram.model";
import { HazopGeneral } from "./hazop-general.model";

export class HazopRes {
    approver: any[];
    approver_ta3: any[];
    apu: any[];
    apu_filter: any[];
    business_unit: any[];
    company: any[];
    drawing: any[];
    drawing_approver: any[];
    drawingworksheet_responder: any[];
    drawingworksheet_reviewer: any[];
    employee: any[];
    functional: any[];
    functional_audition: any[];
    general: HazopGeneral[];
    guidwords: any[];
    header: any[];
    his_document_name: any[];
    his_document_no: any[];
    his_pha_request_name: any[];
    his_reference_moc: any[];
    likelihood_level: any[];
    max: any[];
    memberteam: any[];
    node: any[];
    nodedrawing: any[];
    nodeguidwords: any[];
    nodeworksheet: any[];
    ram: Ram[];
    ram_color: any[];
    ram_level: any[];
    relatedpeople: any[];
    relatedpeople_outsider: any[];
    request_type: any[];
    security_level: any[];
    session: any[];
    session_last: any[];
    session_last_reject: any[];
    tagid_audition: any[];
    unit_no: UnitNo[];
    user_in_pha_no: any[];
  
    constructor(
        approver: any[],
        approver_ta3: any[],
        apu: any[],
        apu_filter: any[],
        business_unit: any[],
        company: any[],
        drawing: any[],
        drawing_approver: any[],
        drawingworksheet_responder: any[],
        drawingworksheet_reviewer: any[],
        employee: any[],
        functional: any[],
        functional_audition: any[],
        general: HazopGeneral[],
        guidwords: any[],
        header: any[],
        his_document_name: any[],
        his_document_no: any[],
        his_pha_request_name: any[],
        his_reference_moc: any[],
        likelihood_level: any[],
        max: any[],
        memberteam: any[],
        node: any[],
        nodedrawing: any[],
        nodeguidwords: any[],
        nodeworksheet: any[],
        ram: Ram[],
        ram_color: any[],
        ram_level: any[],
        relatedpeople: any[],
        relatedpeople_outsider: any[],
        request_type: any[],
        security_level: any[],
        session: any[],
        session_last: any[],
        session_last_reject: any[],
        tagid_audition: any[],
        unit_no: UnitNo[],
        user_in_pha_no: any[]
    ){
        this.approver = approver;
        this.approver_ta3 = approver_ta3;
        this.apu = apu;
        this.apu_filter = apu_filter;
        this.business_unit = business_unit;
        this.company = company;
        this.drawing = drawing;
        this.drawing_approver = drawing_approver;
        this.drawingworksheet_responder = drawingworksheet_responder;
        this.drawingworksheet_reviewer = drawingworksheet_reviewer;
        this.employee = employee;
        this.functional = functional;
        this.functional_audition = functional_audition;
        this.general = general;
        this.guidwords = guidwords;
        this.header = header;
        this.his_document_name = his_document_name;
        this.his_document_no = his_document_no;
        this.his_pha_request_name = his_pha_request_name;
        this.his_reference_moc = his_reference_moc;
        this.likelihood_level = likelihood_level;
        this.max = max;
        this.memberteam = memberteam;
        this.node = node;
        this.nodedrawing = nodedrawing;
        this.nodeguidwords = nodeguidwords;
        this.nodeworksheet = nodeworksheet;
        this.ram = ram;
        this.ram_color = ram_color;
        this.ram_level = ram_level;
        this.relatedpeople = relatedpeople;
        this.relatedpeople_outsider = relatedpeople_outsider;
        this.request_type = request_type;
        this.security_level = security_level;
        this.session = session;
        this.session_last = session_last;
        this.session_last_reject = session_last_reject;
        this.tagid_audition = tagid_audition;
        this.unit_no = unit_no;
        this.user_in_pha_no = user_in_pha_no;
    }
}
