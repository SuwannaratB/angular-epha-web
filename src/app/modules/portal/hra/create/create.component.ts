import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoadingService } from '../../../../services/loading-service/loading.service';
import { HraService } from '../../../../services/hra-service/hra.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private hraService: HraService,
    private loadingService: LoadingService,
  ){}

  phaNo: string = 'HRA-2024-00000XX';
  currentTab: number = 1;
  sessionForm: FormBuilder | any;
  drawingForm: FormBuilder | any;
  nodeForm: FormBuilder | any;
  
  ngOnInit(): void {
    this.initSessionForm();
    this.initDrawingForm();
    this.initNodeForm();
    this.fetchHRA();
  }

  fetchHRA(): void {
    const data = {
      sub_software: "hra",
      user_name: "ZKULUWAT",
      token_doc: "2621",
      type_doc: "edit"
  }
    this.loadingService.showLoading().subscribe({
      next: () => {
        this.hraService.getHra(data).subscribe({
          next: (value) => {
            console.log(value);
          },
          complete: () => {
            this.loadingService.closeLoading();
          },
          error: () => {
            this.loadingService.closeLoading();
          }
        })
      },
      error: () => {
        this.loadingService.closeLoading()
      }
    })
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

  initDrawingForm(): void {
    this.drawingForm = this.fb.array([
      this.fb.group({ 
        documentName: [''], 
        documentFile: [''],
        drawingNo: [''],
        comment: [''],
      }),
    ])
  }

  initNodeForm(): void {
    this.nodeForm = this.fb.array([
      this.fb.group({ 
        node: [''], 
        designIntent: [''],
        designCondition: [''],
        operatingCondition: [''],
        nodeBroundDary: [''],
        drawing: [''],
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
