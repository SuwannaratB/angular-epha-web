import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {
  @Input() icon: string = '';
  @Output() outCopy = new EventEmitter<void>();
  @Output() outDelete = new EventEmitter<void>();

  onCopy() {
    this.outCopy.emit(); // ส่ง Event เมื่อคลิกปุ่ม
  }
  onDelete() {
    this.outDelete.emit(); // ส่ง Event เมื่อคลิกปุ่ม
  }
}
