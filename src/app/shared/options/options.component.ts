import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  @Input() icon: string = '';
  @Output() outAdd = new EventEmitter<void>();
  @Output() outCopy = new EventEmitter<void>();
  @Output() outDelete = new EventEmitter<void>();

  onAdd() {
    this.outAdd.emit(); // ส่ง Event เมื่อคลิกปุ่ม
    this.closeDropdown();
  }

  onCopy() {
    this.outCopy.emit(); // ส่ง Event เมื่อคลิกปุ่ม
    this.closeDropdown();
  }

  onDelete() {
    this.outDelete.emit(); // ส่ง Event เมื่อคลิกปุ่ม
    this.closeDropdown();
  }

  closeDropdown() {
    const dropdownElement = this.dropdownMenu.nativeElement;
    dropdownElement.classList.remove('dropdown-open');
  }
}
