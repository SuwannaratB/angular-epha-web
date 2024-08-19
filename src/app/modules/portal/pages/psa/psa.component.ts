import { Component } from '@angular/core';

@Component({
  selector: 'app-psa',
  templateUrl: './psa.component.html',
  styleUrl: './psa.component.scss'
})
export class PsaComponent {

  phaNo: string = 'PSA-2024-00000XX'
  currentTab: number = 1;

  toggleTabs(id:number): void{
    this.currentTab = id;
  }

}
