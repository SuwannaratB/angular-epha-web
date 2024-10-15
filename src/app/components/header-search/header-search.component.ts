import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrl: './header-search.component.scss'
})
export class HeaderSearchComponent {
  constructor(
    private _location: Location
  ){}

  @Input() title: string = 'Search Sub-Software';
  @Output() outCreate = new EventEmitter<void>();

  onBack(): void{
    this._location.back();
  }

  onClear(): void{
    this.outCreate.emit(); // ส่ง Event เมื่อคลิกปุ่ม
  }
}
