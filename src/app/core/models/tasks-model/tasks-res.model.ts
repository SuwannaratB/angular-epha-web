import { Tasks } from "./tasks.model";

export class TasksRes {
    resultes: Tasks[];
    status: string;
  
    constructor(resultes: Tasks[], status: string){
      this.resultes = resultes;
      this.status = status;
    }
  }