import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab-node',
  templateUrl: './tab-node.component.html',
  styleUrl: './tab-node.component.scss'
})
export class TabNodeComponent {

  @Input() nodeForm: FormGroup| any
  @Input() drawingForm: FormGroup| any

  constructor(
    private fb:FormBuilder
  ){}

  
  selectedFile: File | null = null;

  onDeleteDrawing(index: number): void{
    if(index != 0 || this.drawingForm.length != 1) 
      return  this.drawingForm.removeAt(index);
    
    const firstGroup = this.drawingForm.at(0) as FormGroup;
    firstGroup.patchValue({
      comment: [''],
      drawingNo: [''],
      documentFile: [''],
      documentName: [''], 
    });
  }

  onAddDrawing(index: number): void{
    const newData = this.fb.group({ 
      comment: [''],
      drawingNo: [''],
      documentFile: [''],
      documentName: [''], 
    });

    this.drawingForm.insert(index + 1, newData);
  }

  onDeleteNode(index: number): void{
    console.log(this.nodeForm.length)
    if(index != 0 || this.nodeForm.length != 1) 
      return  this.nodeForm.removeAt(index);

    const firstGroup = this.nodeForm.at(0) as FormGroup;
    firstGroup.patchValue({
      node: [''], 
      drawing: [''],
      designIntent: [''],
      nodeBroundDary: [''],
      designCondition: [''],
      operatingCondition: [''],
    });
  }

  onCopyNode(index: number, item: FormGroup): void {
    const copyData = this.fb.group({
      node: [item.get('node')?.value || ''],
      drawing: [item.get('drawing')?.value || ''],
      designIntent: [item.get('designIntent')?.value || ''],
      nodeBroundDary: [item.get('nodeBroundDary')?.value || ''],
      designCondition: [item.get('designCondition')?.value || ''],
      operatingCondition: [item.get('operatingCondition')?.value || ''],
    });
    this.nodeForm.insert(index + 1, copyData)
  }

  onAddNode(index: number): void{
    const newData = this.fb.group({ 
      node: [''], 
      drawing: [''],
      designIntent: [''],
      nodeBroundDary: [''],
      designCondition: [''],
      operatingCondition: [''],
    });
    this.nodeForm.insert(index + 1, newData);
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      console.log('Selected file:', this.selectedFile);
    }
  }
  

}
