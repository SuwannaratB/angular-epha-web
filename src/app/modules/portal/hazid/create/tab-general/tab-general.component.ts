import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-general',
  templateUrl: './tab-general.component.html',
  styleUrl: './tab-general.component.scss'
})
export class TabGeneralComponent {
  options = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' },
  ]
}
