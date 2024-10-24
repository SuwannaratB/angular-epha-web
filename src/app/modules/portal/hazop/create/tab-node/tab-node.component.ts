import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab-node',
  templateUrl: './tab-node.component.html',
  styleUrl: './tab-node.component.scss'
})
export class TabNodeComponent implements OnInit{
  @Input() drawingForm: FormGroup | any;

  fileSelected: File | undefined;

  constructor(){}
  
  ngOnInit(): void {
    // console.log(this.drawingForm)
  }

  onFileSelected(event: any): void {
    this.fileSelected = event.target.files[0];
    console.log(event)
    if (this.fileSelected) {
      // อัปเดตชื่อไฟล์ใน form control
      // this.itemControl.patchValue({
      //   document_file_name: file.name
      // });

      // คุณสามารถทำงานเพิ่มเติมกับไฟล์ที่นี่ เช่น การอัปโหลดไปยังเซิร์ฟเวอร์
      console.log(this.fileSelected);
    }
  }

  removeFile(event: Event): void{
    event.stopPropagation();
    console.log('first')
  }
  
}
