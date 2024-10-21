import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { checkNavigateNextPage, getRouteParams, navigateNextPage } from '../../../../core/utils/function';
import { NextPage } from '../../../../core/models/next-page.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
  ){}
  
  dataNexPage: NextPage | undefined;
  subSoftware: string = 'hazop';
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
    this.location.back();
  }

  onCreate(): void {
    this.router.navigate([`${this.subSoftware}/create`]);
  }
}
