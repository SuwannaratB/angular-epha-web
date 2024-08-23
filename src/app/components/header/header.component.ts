import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private _location: Location
  ){}

  @Input() phaNo: string = '';

  @Output() outCancel = new EventEmitter<void>();
  @Output() outSave = new EventEmitter<void>();
  @Output() outTaskRegister = new EventEmitter<void>();

  onBack(): void{
    this._location.back();
  }

  onCancel(): void{
    this.outCancel.emit(); // ส่ง Event เมื่อคลิกปุ่ม
  }

  onSave(): void{
    this.outSave.emit(); // ส่ง Event เมื่อคลิกปุ่ม
  }

  onTaskRegister(): void{
    this.outTaskRegister.emit(); // ส่ง Event เมื่อคลิกปุ่ม
  }
}
