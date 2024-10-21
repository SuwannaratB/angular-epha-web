import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoadingService } from '../../../core/services/loading-service/loading.service';
import { SearchService } from '../../../core/services/search-service/search.service';
import { SearchRes } from '../../../core/models/search-model/search-res.model';
import { Search } from '../../../core/models/search-model/search.model';
import { subSoftware, statusSoftware, expenseType, subExpenseType } from '../../../core/data/dataMaster';
import { PageReq } from '../../../core/models/page-req.model';
import { AuthService } from '../../../core/services/auth-service/auth.service';
import { User } from '../../../core/models/user/user';
import { getNameMaster } from '../../../core/utils/function';
import { Router } from '@angular/router';
import { NextPage } from '../../../core/models/next-page.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  user: User | undefined;
  filterForm: FormBuilder | any;
  listData: Search[] = [];
  listDataDef: Search[] = [];
  // master
  listSubSoftware = subSoftware;
  listExpenseType = expenseType ;
  listStatusSoftware = statusSoftware;
  listSubExpenseType = subExpenseType;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private searchService: SearchService,
    private loadingService: LoadingService,
  ){
    this.user = authService.getUser();
  }

  ngOnInit(): void {
    this.initFilterForm();
    this.prosessFilter();
  }

  initFilterForm(): void{
    this.filterForm = this.fb.group({ 
      subSoftware: [1],
      status: [0],
      expenseType: [0],
      subExpensetype: [0],
      referenceMoc: [''],
      projectNo: [''],
      projectName: [''],
      attendeesName: [''],
    });
  }

  fetchDetails(data: PageReq): void{
    this.loadingService.showLoading().subscribe({
      next: () => {
        this.searchService.get(data).subscribe({
          next: (value) => {
            this.listDataDef = value.results.sort((a, b) => b.id - a.id );
            this.listData = this.listDataDef;
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

  onChangeFilter(section: string, event: string): void {
    if(section) section = section.toLocaleLowerCase();

    if (section == 'subsoftware') {
      this.initFilterForm();
      this.filterForm.patchValue({
        subSoftware: Number(event),
      })
      return this.prosessFilter();
    }
    
    const formStatus = Number(this.filterForm.value.status);
    const formExpenseType = getNameMaster(this.listExpenseType, Number(this.filterForm.value.expenseType));
    const formSubExpensetype = getNameMaster(this.listSubExpenseType, Number(this.filterForm.value.subExpensetype));
    const formProjectNo = this.filterForm.value.projectNo;
    const formProjectName = this.filterForm.value.projectName;
    console.log(formExpenseType)
    this.listData = this.listDataDef.filter((item) => {
      return (formStatus != 0
          ? item.pha_status
            ? item.pha_status == formStatus 
            : false
          : true
        )
        && (formExpenseType != 'ALL'
          ? item.expense_type
            ? item.expense_type.toLocaleLowerCase() == formExpenseType?.toLocaleLowerCase() 
            : false
          : true
        )
        && (formSubExpensetype != 'ALL'
          ? item.sub_expense_type
            ? item.sub_expense_type.toLocaleLowerCase() == formSubExpensetype?.toLocaleLowerCase() 
            : false
          : true
        )
        && (formProjectNo != ''
          ? item.pha_no
            ? item.pha_no.toLocaleLowerCase().includes(formProjectNo.toLocaleLowerCase()) 
            : false
          : true
        )
        && (formProjectName != ''
          ? item.pha_request_name 
            ? item.pha_request_name.toLocaleLowerCase().includes(formProjectName.toLocaleLowerCase()) 
            : false
          : true
        )
    })
    console.log(this.listData)
  }
    
  prosessFilter(): void{
    const subSoftware = getNameMaster(this.listSubSoftware, Number(this.filterForm.value.subSoftware)) 
    const data = {
      sub_software: subSoftware!,
      user_name: this.user!.user_name,
      token_doc: "",
      type_doc: "search"
    }
    this.fetchDetails(data)
  }

  onOpenDocument(data: Search): void{
    if(!data || !data.pha_sub_software) return;
    const nextPage = new NextPage(
      data.seq,
      data.pha_status,
      data.pha_sub_software,
      'edit'
    );
    this.router.navigate([data.pha_sub_software, nextPage]);
  }

  onClear(): void {

  }

  onBack(): void{

  }

}
