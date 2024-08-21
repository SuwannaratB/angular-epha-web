import { Component } from '@angular/core';

@Component({
  selector: 'app-hazid-tab-general',
  templateUrl: './hazid-tab-general.component.html',
  styleUrl: './hazid-tab-general.component.scss'
})
export class HazidTabGeneralComponent {
  options = [
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
    { value: 3, label: 'three' },
  ]
}
