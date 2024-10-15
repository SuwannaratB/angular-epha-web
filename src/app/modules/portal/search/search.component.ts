import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoadingService } from '../../../core/services/loading-service/loading.service';
import { SearchService } from '../../../core/services/search-service/search.service';
import { SearchRes } from '../../../core/models/search-model/search-res.model';
import { Search } from '../../../core/models/search-model/search.model';
import { SubSoftware, StatusSoftware, ExpenseType, SubExpenseType } from '../../../core/data/dataSearch';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  filterForm: FormBuilder | any;
  listData: Search[] = [];
  // master
  listSubSoftware = SubSoftware;
  listExpenseType = ExpenseType;
  listStatusSoftware = StatusSoftware;
  listSubExpenseType = SubExpenseType;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private loadingService: LoadingService,
  ){}

  ngOnInit(): void {
    this.initFilterForm();
    this.fetchDetails();
  }

  initFilterForm(): void{
    this.filterForm = this.fb.group({ 
      subSoftware: [1],
      status: [0],
      expenseType: [0],
      subExpensetype: [0],
      referenceMoc: [''],
      projectNo: [''],
      attendeesName: [''],
    });
  }

  // setFilterForm(value: SearchRes): void{
  //   this.filterForm = this.fb.group({
  //     ...value
  //   });
  //   console.log(this.filterForm.value)
  // }

  fetchDetails(): void{
    const data = {
      sub_software: "hazop",
      user_name: 'zkuluwat',
      token_doc: "",
      type_doc: "search"
    }
    this.loadingService.showLoading().subscribe({
      next: () => {
        this.searchService.get(data).subscribe({
          next: (value) => {
            // this.setFilterForm(value);
            this.listData = value.results;
            console.log(this.listData)
            // this.isLoading = false;
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


  onChangeFilter(section: string, event: String): void {
    console.log(event)
  }

  onClear(): void {

  }

  onBack(): void{

  }

}
