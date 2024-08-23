import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  phaNo: string = 'PSA-2024-00000XX'
  currentTab: number = 1;

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
