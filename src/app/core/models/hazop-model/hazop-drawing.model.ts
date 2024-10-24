export class HazopDrawing {
    seq: number;
    id_pha: number;
    id: number;
    document_name: string;
    document_no: string;
    document_file_name: string;
    document_file_path: string;
    descriptions: string;
    create_date: string;
    update_date: string;
    create_by: string;
    update_by: string;
    no: number;
    document_file_size: number;
    document_module: string;
    action_type: string;
    action_change: number;

    constructor(data: {
        seq: number;
        id_pha: number;
        id: number;
        document_name: string;
        document_no: string;
        document_file_name: string;
        document_file_path: string;
        descriptions: string;
        create_date: string;
        update_date: string;
        create_by: string;
        update_by: string;
        no: number;
        document_file_size: number;
        document_module: string;
        action_type: string;
        action_change: number;
    }) {
        this.seq = data.seq;
        this.id_pha = data.id_pha;
        this.id = data.id;
        this.document_name = data.document_name;
        this.document_no = data.document_no;
        this.document_file_name = data.document_file_name;
        this.document_file_path = data.document_file_path;
        this.descriptions = data.descriptions;
        this.create_date = data.create_date;
        this.update_date = data.update_date;
        this.create_by = data.create_by;
        this.update_by = data.update_by;
        this.no = data.no;
        this.document_file_size = data.document_file_size;
        this.document_module = data.document_module;
        this.action_type = data.action_type;
        this.action_change = data.action_change;
    }
}
