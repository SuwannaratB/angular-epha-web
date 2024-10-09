import { Component } from '@angular/core';
import { dataMasterHome } from '../../core/data/dataMasterHome';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
  dataMasterHome = dataMasterHome;
}
