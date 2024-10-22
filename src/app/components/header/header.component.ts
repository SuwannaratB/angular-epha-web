import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { statusSoftware } from '../../core/data/dataMaster';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
  ){}

  ngOnInit(): void {
    if (this.requestStatus) {
      const result = statusSoftware.find(item => this.requestStatus == item.id);
      this.status = result?.name;
    }
  }

  @Input() phaNo: string | undefined;
  @Input() revision: string | undefined;
  @Input() requestBy: string | undefined;
  @Input() requestStatus : number | undefined;
  @Input() urlBack: string = '';

  @Output() outCancel = new EventEmitter<void>();
  @Output() outSave = new EventEmitter<void>();
  @Output() outTaskRegister = new EventEmitter<void>();

  status: string | undefined;

  onBack(): void{
    if (this.urlBack) {
      this.router.navigate([this.urlBack])
    } else {
      this.location.back();
    }
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
