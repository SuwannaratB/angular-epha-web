import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  @Input() icon: string = '';
  @Output() outClick = new EventEmitter<void>();

  onClick() {
    this.outClick.emit(); // ส่ง Event เมื่อคลิกปุ่ม
  }
}
