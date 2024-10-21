export class NextPage {
    PHA_Seq: number;
    PHA_Status: number;
    PHA_SubSoftware: string;
    PHA_TypeDoc: string;
    // row_type: string;
  
    constructor(
      PHA_Seq: number, 
      PHA_Status: number, 
      PHA_SubSoftware: string, 
      PHA_TypeDoc: string, 
      // row_type: string
    ){
      this.PHA_Seq = PHA_Seq;
      this.PHA_Status = PHA_Status;
      this.PHA_SubSoftware = PHA_SubSoftware;
      this.PHA_TypeDoc = PHA_TypeDoc;
      // this.row_type = row_type;
    }
  }