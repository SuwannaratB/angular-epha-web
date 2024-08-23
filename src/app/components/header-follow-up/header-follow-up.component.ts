import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-follow-up',
  templateUrl: './header-follow-up.component.html',
  styleUrl: './header-follow-up.component.scss'
})
export class HeaderFollowUpComponent {
  constructor(
    private _location: Location
  ){}

  @Input() title: string = 'Followup Sub-Software';
  @Output() outCreate = new EventEmitter<void>();

  onBack(): void{
    this._location.back();
  }

  onCreate(): void{
    this.outCreate.emit(); // ส่ง Event เมื่อคลิกปุ่ม
  }
}
