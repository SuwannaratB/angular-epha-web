import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  constructor(
    private _route: Router,
    private _location: Location,
  ){}

  isLoading: boolean = true;
  currentTab: number = 1;

  toggleTabs(id:number): void{
    this.currentTab = id;
  }

  onBack(): void{
    this._location.back();
  }

  onCreate(): void{
    this._route.navigate(['/hazid/create']);
  }
}
