import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private _route: Router,
    private _location: Location,
  ){}
  
  subSoftware: string = 'hra';
  isLoading: boolean = true;
  currentTab: number = 1;
  filterForm: FormBuilder | any;
  
  ngOnInit(): void {
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
    this._route.navigate(['/hra/create']);
  }
}
