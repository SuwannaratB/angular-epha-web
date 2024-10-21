import { Component, OnInit } from '@angular/core';
import { User } from '../../../../core/models/user/user';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth-service/auth.service';
import { LoadingService } from '../../../../core/services/loading-service/loading.service';
import { HazopService } from '../../../../core/services/hazop-service/hazop.service';
import { HazopGeneral } from '../../../../core/models/hazop-model/hazop-general.model';
import { expenseType, subExpenseType } from '../../../../core/data/dataMaster';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Search } from '../../../../core/models/search-model/search.model';
import { getIdMaster, getNameMaster, getRouteParams, transformDate } from '../../../../core/utils/function';
import { PageReq } from '../../../../core/models/page-req.model';
import { NextPage } from '../../../../core/models/next-page.model';
import { UnitNo } from '../../../../core/models/master_model/unit-no.model';
import { HazopSession } from '../../../../core/models/hazop-model/hazop-session.model';
import { MemberTeam } from '../../../../core/models/member-team-model/member-team.model';
import { Ram } from '../../../../core/models/ram-model/ram.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  subSoftware: string = 'hazop';
  phaNo: string = 'HAZOP-2024-00000XX';
  user: User | undefined
  currentTab: number = 4;
  isLoading: boolean = true;
  params: NextPage | undefined;
  // Form Groups
  generalForm: FormBuilder | any;
  sessionForm: FormBuilder | any;
  // drawingForm: FormBuilder | any;
  // nodeForm: FormBuilder | any;
  // worksheetForm: FormBuilder | any;
  // recommendationForm: FormBuilder | any;
  // Master
  listProjectType = expenseType;
  listSubProjectType = subExpenseType;
  listAPU: {id: number, name: string}[] = []
  listUnitNo: UnitNo[] = []
  listRam: Ram[] = []

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private hazopService: HazopService,
    private loadingService: LoadingService,
  ){
    this.user = authService.getUser();
  }

  async ngOnInit(): Promise<void> {
    // ถ้ามาจากหน้า search จะได้ข้อมมูล dataNexPage
    this.params = await getRouteParams(this.route);
    this.initFormGroup();
    this.fetchHazop();
  }

  initFormGroup(): void {
    this.generalForm = this.fb.array([]);
    this.sessionForm = this.fb.array([]);
    // this.drawingForm = this.fb.array([]);
    // this.healthHazardForm = this.fb.array([]);
  }

  fetchHazop(): void{
    const payload = new PageReq(
      this.params?.PHA_SubSoftware ?? this.subSoftware, 
      this.params?.PHA_Seq.toString() ?? '', 
      this.params?.PHA_TypeDoc ?? 'create', 
      this.user?.user_name ?? ''
    )
    this.loadingService.showLoading().subscribe({
      next: () => {
        this.hazopService.getHazop(payload).subscribe({
          next: (value) => {
            // General
            this.setGeneralForm(value.general);
            this.setSessionForm(value.session, value.memberteam);
            // Master
            this.listAPU = value.apu;
            this.listUnitNo = value.unit_no;
            this.listRam = value.ram;

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

  setGeneralForm(valueGeneral: HazopGeneral[]): void {
    this.generalForm.clear();
    valueGeneral.forEach(data => {
      this.generalForm.push(this.fb.group({
        ...data,
        id_apu: [data.id_apu, Validators.required],                         // set Validators
        id_unit_no: [data.id_unit_no, Validators.required],                 // set Validators
        pha_request_name: [data.pha_request_name, Validators.required],     // set Validators
        expense_type: [getIdMaster(this.listProjectType, data.expense_type)], // ถ้าข้อมูล dropdown ไหนเป็น string ให้แปลงเป็น number -- ตอน save แปลงกลับเป็น string ด้วย
        sub_expense_type: [getIdMaster(this.listSubProjectType, data.sub_expense_type)], // ถ้าข้อมูล dropdown ไหนเป็น string ให้แปลงเป็น number -- ตอน save แปลงกลับเป็น string ด้วย
      }));
    });
    console.log('generalForm ==> ', this.generalForm.value)
  }

  setSessionForm(valueSession: HazopSession[], valueMemberTeam: MemberTeam[]): void {
    this.sessionForm?.clear();
    valueSession.forEach(data => {
      this.sessionForm.push(this.fb.group({
        ...data,
        member_team: [[...valueMemberTeam]], // ตอน save delete key นี้ด้วย!
        meeting_date: transformDate(data.meeting_date),
        meeting_start_time_hh: data.meeting_start_time_hh == '00' ? 0 : Number(data.meeting_start_time_hh), // ตอน save convert กลับด้วย!
        meeting_start_time_mm: data.meeting_start_time_mm == '00' ? 0 : Number(data.meeting_start_time_mm), // ตอน save convert กลับด้วย!
        meeting_end_time_hh: data.meeting_end_time_hh == '00' ? 0 : Number(data.meeting_end_time_hh), // ตอน save convert กลับด้วย!
        meeting_end_time_mm: data.meeting_end_time_mm == '00' ? 0 : Number(data.meeting_end_time_mm), // ตอน save convert กลับด้วย!
      }));
    });
    console.log('sessionForm ==> ',this.sessionForm.value)
  }

  toggleTabs(id:number): void{
    this.currentTab = id;
  }

  onCancel(): void{
    console.log('onCancel')
  }

  onSave(): void{
    if (!this.generalForm.valid) {
      console.log('first')
    }
    this.generalForm.value[0].expense_type = getNameMaster(this.listProjectType, Number(this.generalForm.value[0].expense_type));
    this.generalForm.value[0].sub_expense_type = getNameMaster(this.listSubProjectType, Number(this.generalForm.value[0].sub_expense_type));
    console.log(this.sessionForm.value)
  }

  onTaskRegister(): void{
    console.log('onTaskRegister')
  }
}
