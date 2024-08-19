import { Component } from '@angular/core';

@Component({
  selector: 'app-lopa',
  templateUrl: './lopa.component.html',
  styleUrl: './lopa.component.scss'
})
export class LopaComponent {
  currentTab: number = 1;
  phaNo: string = 'LOPA-2024-00000XX'

  toggleTabs(id:number): void{
    this.currentTab = id;
  }
}
