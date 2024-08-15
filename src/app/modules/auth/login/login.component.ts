import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../../models/account/account.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router
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

    this.account.username = this.loginForm.value.username
    this.account.img = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
    localStorage.setItem('account',JSON.stringify(this.account))
    this.router.navigate([''])
  }
}
