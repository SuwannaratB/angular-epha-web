import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  constructor(
    private fb:FormBuilder
  ){}

  phaNo: string = 'HAZID-2024-00000XX';
  currentTab: number = 2;
  sessionForm: FormBuilder | any;
  nodeForm: FormBuilder | any;
  
  ngOnInit(): void {
    this.initSessionForm();
    this.initNodeForm();
  }

  initSessionForm(): void {
    this.sessionForm = this.fb.array([
      this.fb.group({ 
        memberTeam: [[]], 
        meetingDate: [''],
        startDateHr: [''],
        startDateMin: [''],
        endDateHr: [''],
        endDateMin: [''],
      }),
    ])
  }

  initNodeForm(): void {
    this.nodeForm = this.fb.array([
      this.fb.group({ 
        documentName: [''], 
        documentFile: [''],
        drawingNo: [''],
        comment: [''],
      }),
    ])
  }

  toggleTabs(id:number): void{
    this.currentTab = id;
  }

  onCancel(): void{
    console.log('onCancel')
  }

  onSave(): void{
    console.log('onSave')
    console.log(this.sessionForm.value)
  }

  onTaskRegister(): void{
    console.log('onTaskRegister')
  }
}