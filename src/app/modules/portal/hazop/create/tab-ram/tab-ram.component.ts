import { Component, Input } from '@angular/core';
import { Ram } from '../../../../../core/models/ram-model/ram.model';
import { environment } from '../../../../../../environments/environment';


@Component({
  selector: 'app-tab-ram',
  templateUrl: './tab-ram.component.html',
  styleUrl: './tab-ram.component.scss'
})
export class TabRamComponent {
  @Input() ram: Ram[] = [];
  
  domainFile = environment.domainFile;
}
