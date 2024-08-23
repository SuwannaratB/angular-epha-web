import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LoadingComponent>,
    private renderer: Renderer2, private el: ElementRef
  ){}

  onClose(): void {
    this.dialogRef.close();
  }

  showFirstIcon = true;

  ngOnInit(): void {
    setInterval(() => {
      this.showFirstIcon = !this.showFirstIcon;
    }, 1000); // สลับไอคอนทุกๆ 1 วินาที
  }

}
