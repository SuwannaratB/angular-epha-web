import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { checkNavigateNextPage } from '../../../../core/utils/function';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location,
  ){}
  
  subSoftware: string = 'hra';
  isLoading: boolean = true;
  currentTab: number = 1;
  filterForm: FormBuilder | any;
  
  async ngOnInit(): Promise<void> {
    await checkNavigateNextPage(this.route, this.router);
    this.initFilterForm();
  }

  initFilterForm(): void{
    this.filterForm = this.fb.group({ 
      search: [''],
    });
  }

  onChangeSearch(even: string): void {
    // console.log(even)
  }

  toggleTabs(id:number): void {
    this.currentTab = id;
  }

  onBack(): void {
    this._location.back();
  }

  onCreate(): void {
    this.router.navigate(['/hra/create']);
  }
}
