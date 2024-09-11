import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { User } from '../../core/models/user/user';

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
  
  user: User | undefined;

  ngOnInit(): void {
    this.isAccountLogin();
  }

  isAccountLogin():boolean {
    if (localStorage.getItem('account')) {
      const data = JSON.parse(localStorage.getItem('account')!)
      this.user!.user_name = data.username
      this.user!.user_img = data.img
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

