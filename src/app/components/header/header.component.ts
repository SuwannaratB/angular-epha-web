import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private _route: Router
  ){}

  @Input() phaNo: string = '';

  onBack(): void{
    this._route.navigate([''])
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
