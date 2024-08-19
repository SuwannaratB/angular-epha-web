import { Component } from '@angular/core';

@Component({
  selector: 'app-hazid',
  templateUrl: './hazid.component.html',
  styleUrl: './hazid.component.scss'
})
export class HazidComponent {

  phaNo: string = 'HAZID-2024-00000XX'
  currentTab: number = 1;

  toggleTabs(id:number): void{
    this.currentTab = id;
  }

}
