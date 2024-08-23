import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  phaNo: string = 'HAZID-2024-00000XX'
  currentTab: number = 2;

  toggleTabs(id:number): void{
    this.currentTab = id;
  }

  onCancel(): void{
    console.log('onCancel')
  }

  onSave(): void{
    console.log('onSave')
  }

  onTaskRegister(): void{
    console.log('onTaskRegister')
  }
}
