import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { HraRes } from '../../../../core/models/hra-model/hra-res.model';
import { HraService } from '../../../../core/services/hra-service/hra.service';
import { LoadingService } from '../../../../core/services/loading-service/loading.service';
import { Header } from '../../../../core/models/header.model';
import { HraSaveReq } from '../../../../core/models/hra-model/hra-save-req.model';
import { HraGeneral } from '../../../../core/models/hra-model/hra-general.model';
import { HraSession } from '../../../../core/models/hra-model/hra-session.model';

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
  currentTab: number = 2;
  isLoading: boolean = false;
  // isLoading: boolean = true;
  // Form Groups
  generalForm: FormBuilder | any;
  sessionForm: FormBuilder | any;
  drawingForm: FormBuilder | any;
  healthHazardForm: FormBuilder | any;
  workerGroupForm: FormBuilder | any;
  // Master
  departmentList: any[] = [];
  sectionList: any[] = [];
  companyList: any[] = [];
  areaList: any[] = [];
  apuList: any[] = [];
  header: Header | undefined;
  
  ngOnInit(): void {
    this.initFormGroup();
    this.setHealthHazardForm();
    this.fetchHRA();
  }

  fetchHRA(): void {
    const data = {
      sub_software: "hra",
      user_name: "ZKULUWAT",
      token_doc: "",
      type_doc: "create"
    }
    this.loadingService.showLoading().subscribe({
      next: () => {
        this.hraService.getHra(data).subscribe({
          next: (value) => {
            this.setGeneralForm(value.general);
            this.setSessionForm(value.session);
            this.setMaster(value);
            this.isLoading = false;
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
        this.loadingService.closeLoading();
      }
    })
  }
  
  initFormGroup(): void {
    this.generalForm = this.fb.array([]);
    this.sessionForm = this.fb.array([]);
    this.drawingForm = this.fb.array([]);
    this.healthHazardForm = this.fb.array([]);
  }
  
  setGeneralForm(valueGeneral: HraGeneral[]): void {
    this.generalForm.clear();
    valueGeneral.forEach(data => {
      this.generalForm.push(this.fb.group({
        ...data,
        id_company: [1]
      }));
    });
    console.log('general form ==> ', this.generalForm.value);
  }
  
  setSessionForm(valueSession: HraSession[]): void {
    this.sessionForm.clear(); 
    valueSession.forEach(data => {
      this.sessionForm.push(this.fb.group({
       ...data,
       member_team: [[]],// ตอน save ไม่ต้องส่ง key นี้ไป
      }));
    });
    console.log('session form ==> ',this.sessionForm.value)
  }

  // setDrawingForm(valueDrawing: HraSession[]): void {
  //   this.drawingForm.clear(); 
  //   valueSession.forEach(data => {
  //     this.sessionForm.push(this.fb.group({
  //      ...data
  //     }));
  //   });
  //   console.log('session form ==> ',this.sessionForm.value)
  // }

  setHealthHazardForm(): void {
    const moc = [
      {
        seq: 1,
        id_sub_area: null,
      }
    ]
    this.healthHazardForm.clear(); 
    moc.forEach(data => {
      this.healthHazardForm.push(this.fb.group({
        ...data,
        type_hazards: [[
          {
            seq: 11,
          },
          {
            seq: 22,
          },
          {
            seq: 22,
          },
          {
            seq: 22,
          },
        ]],
        health_hazards: [[
          {
            seq: 111,
          },
          {
            seq: 222,
          },
        ]],
      }));
    });
    console.log('health hazards form ==> ',this.healthHazardForm.value)
  }

  setMaster(value: HraRes): void {
    this.departmentList = value.departments.filter(_item => _item.id);
    this.sectionList = value.sections.filter(_item => _item.id);
    this.companyList = value.company.filter(_item => _item.id);
    this.areaList = value.unit_no.filter(_item => _item.id);
    this.apuList = value.apu.filter(_item => _item.id);
    this.header = value.header[0]
  }

  setDataSave(): HraSaveReq {
    const data  = {
      flow_action: 'save',
      token_doc: this.header?.seq?.toString(),
      pha_status: this.header?.pha_status.toString(),
      pha_version: this.header?.pha_version.toString(),
      action_part: '1',
      user_name: this.header?.request_user_name.toString(),
      json_header: JSON.stringify([this.header]),
      json_general: JSON.stringify([this.generalForm.value]),
      json_session :  '',
      json_memberteam :  '',
      json_approver :  '',
      json_relatedpeople_outsider :  '',
      json_drawing :  '',
      json_subareas :  '',
      json_hazard :  '',
      json_tasks :  '',
      json_descriptions :  '',
      json_workers :  '',
      json_worksheet :  '',
      json_recommendations :  '',
    }
    return  data as HraSaveReq
  }

  toggleTabs(id:number): void{
    this.currentTab = id;
  }

  onCancel(): void{
    console.log('onCancel')
  }

  onSave(): void{
    this.loadingService.showLoading().subscribe({
      next: () => {
        // console.log(this.generalForm)
        const dataSave = this.setDataSave();
        this.hraService.setHra(dataSave).subscribe({
          next: (value) => {
            // console.log(value);
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
        this.loadingService.closeLoading();
      }
    })
    console.log(this.sessionForm.value)
  }

  onTaskRegister(): void{
    console.log('onTaskRegister')
  }
}
