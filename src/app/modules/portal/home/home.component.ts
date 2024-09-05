import { Component } from '@angular/core';
import { dataHome } from '../../../core/data/dataHome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  dataHome = dataHome
}
