export class UploadFile {
    ATTACHED_FILE_NAME: string;
    ATTACHED_FILE_PATH: string;
    ATTACHED_FILE_OF: string;
    STATUS: string;
    IMPORT_DATA_MSG: string;
  
    constructor(
      ATTACHED_FILE_NAME: string, 
      ATTACHED_FILE_PATH: string, 
      ATTACHED_FILE_OF: string, 
      STATUS: string, 
      IMPORT_DATA_MSG: string
    ){
      this.ATTACHED_FILE_NAME = ATTACHED_FILE_NAME;
      this.ATTACHED_FILE_PATH = ATTACHED_FILE_PATH;
      this.ATTACHED_FILE_OF = ATTACHED_FILE_OF;
      this.STATUS = STATUS;
      this.IMPORT_DATA_MSG = IMPORT_DATA_MSG;
    }
  }