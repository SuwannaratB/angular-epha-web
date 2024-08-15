import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account/account.model';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  constructor(
    private _route: Router,
    private _toastService: ToastService
  ){}
  
  account: Account = {
    username: '',
    img: ''
  }; 

  ngOnInit(): void {
    this.isAccountLogin();
  }

  isAccountLogin():boolean {
    if (localStorage.getItem('account')) {
      const data = JSON.parse(localStorage.getItem('account')!)
      this.account.username = data.username
      this.account.img = data.img
      return true;
    }
    return false;
  }

  onLogut():void {
    localStorage.removeItem('account')
    this._route.navigate(['auth'])
  }

  addInfoToast() {
    this._toastService.info('message');
 }

}
