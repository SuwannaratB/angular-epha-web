import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.scss'
})
export class HeaderHomeComponent {
  constructor(
    // private _location: Location,
  ){}

  @Input() title: string = 'Search Sub-Software';
  @Output() outCreate = new EventEmitter<void>();

  onBack(): void{
    window.location.href = environment.domain + '/home/portal'
  }

  onClear(): void{
    this.outCreate.emit(); // ส่ง Event เมื่อคลิกปุ่ม
  }
}
