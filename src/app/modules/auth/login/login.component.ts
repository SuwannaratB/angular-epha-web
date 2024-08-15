import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../../models/account/account.model';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _toastService: ToastService
  ){}

  account: Account = { username: '', img: '' }; 
  loginForm: FormGroup | any
  error:boolean = false;

  ngOnInit(): void {
    this.initFormLogin()
  }

  initFormLogin():void {
    this.loginForm = this.fb.group({
      username: [null,Validators.required],
      password: [null,Validators.required],
    })
  }

  onLogin():void {
    if (!this.loginForm.valid) {
      return alert('Invalid')
    }
    this._toastService.info('message');
    this.account.username = this.loginForm.value.username
    this.account.img = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
    localStorage.setItem('account',JSON.stringify(this.account))
    setTimeout(() => {
      this.router.navigate([''])
    }, 2000);
  }
}
