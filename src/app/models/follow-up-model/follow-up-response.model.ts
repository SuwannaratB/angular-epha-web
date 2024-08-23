export class FollowUpResponse {
    general: string;
    header_all: string;
    header: [];
    pha_doc: string;

    constructor(general: string, header_all: string, header: [],  pha_doc: string){
      this.general = general;
      this.header_all = header_all;
      this.header = header;
      this.pha_doc = pha_doc;
    }
  }