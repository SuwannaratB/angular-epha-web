export class Ram {
    seq: number;
    id: number;
    name: string;
    selected_type: number;
    category_type: number;
    document_file_size: number;
    document_file_name: string;
    document_file_path: string;
    rows_level: number;
    columns_level: number;
    document_definition_file_path: string;
    action_type: string;
    action_change: number;

    constructor(
        seq: number,
        id: number,
        name: string,
        selected_type: number,
        category_type: number,
        document_file_size: number,
        document_file_name: string,
        document_file_path: string,
        rows_level: number,
        columns_level: number,
        document_definition_file_path: string,
        action_type: string,
        action_change: number
    ){
      this.seq = seq;
      this.id = id;
      this.name = name;
      this.selected_type = selected_type;
      this.category_type = category_type;
      this.document_file_size = document_file_size;
      this.document_file_name = document_file_name;
      this.document_file_path = document_file_path;
      this.rows_level = rows_level;
      this.columns_level = columns_level;
      this.document_definition_file_path = document_definition_file_path;
      this.action_type = action_type;
      this.action_change = action_change;
    }
}
