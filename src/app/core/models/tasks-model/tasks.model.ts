export class Tasks {
    id_pha: number;
    pha_status: number;
    user_name: string;
    user_displayname: string;
    user_email: string;
    user_name_ori: string;
    id_action: number;
    user_action_date: string;
    action_sort: number;
    task: number;
    pha_type: string;
    action_required: string;
    document_number: string;
    document_title: string;
    rev: string;
    originator: string;
    receivesd: string;
    due_date: string;
    action_date: string;
    remaining: number;
    consolidator: string;
  
    constructor(
      id_pha: number,
      pha_status: number,
      user_name: string,
      user_displayname: string,
      user_email: string,
      user_name_ori: string,
      id_action: number,
      user_action_date: string,
      action_sort: number,
      task: number,
      pha_type: string,
      action_required: string,
      document_number: string,
      document_title: string,
      rev: string,
      originator: string,
      receivesd: string,
      due_date: string,
      action_date: string,
      remaining: number,
      consolidator: string
    ) {
      this.id_pha = id_pha;
      this.pha_status = pha_status;
      this.user_name = user_name;
      this.user_displayname = user_displayname;
      this.user_email = user_email;
      this.user_name_ori = user_name_ori;
      this.id_action = id_action;
      this.user_action_date = user_action_date;
      this.action_sort = action_sort;
      this.task = task;
      this.pha_type = pha_type;
      this.action_required = action_required;
      this.document_number = document_number;
      this.document_title = document_title;
      this.rev = rev;
      this.originator = originator;
      this.receivesd = receivesd;
      this.due_date = due_date;
      this.action_date = action_date;
      this.remaining = remaining;
      this.consolidator = consolidator;
    }
  }
  