import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type: string = '';
  @Output() outClick = new EventEmitter<void>();

  onClick() {
    this.outClick.emit(); // ส่ง Event เมื่อคลิกปุ่ม
  }
}
