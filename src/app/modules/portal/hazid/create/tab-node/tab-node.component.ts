import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab-node',
  templateUrl: './tab-node.component.html',
  styleUrl: './tab-node.component.scss'
})
export class TabNodeComponent {

  constructor(
    private fb:FormBuilder
  ){}

  @Input() nodeForm: FormGroup| any

  onDeleteDrawing(index: number): void{

  }

  onAddDrawing(index: number): void{
    const newData = this.fb.group({ 
      documentName: [''], 
      documentFile: [''],
      drawingNo: [''],
      comment: [''],
    });

    this.nodeForm.insert(index + 1, newData);
  }

}
