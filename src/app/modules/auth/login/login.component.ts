import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../../models/account/account.model';
import { ToastService } from 'angular-toastify';
import { LoginService } from '../../../services/auth-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _loginService: LoginService,
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
      username: ['zkuluwat@thaioilgroup.com',Validators.required],
      password: ['1',Validators.required],
    })
  }

  onLogin():void {
    if (!this.loginForm.valid) {
      return alert('Invalid')
    }
    
    const data = {
      user_name: this.loginForm.value.username,
      pass_word: this.loginForm.value.password,
    }

    this._loginService.login(data).subscribe({
      next: (res) => {
        // this.account.username = this.loginForm.value.username
        // this.account.img = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
        localStorage.setItem('account',JSON.stringify(res))

        if (!localStorage.getItem('account')) 
          return this._toastService.error('Login failed. Please try again.');

        this._toastService.success('Login successful!');
        setTimeout(() => {
          this.router.navigate([''])
        }, 1000);
      },
      error: (err) => {
        this._toastService.error('Login failed. Please try again.');
      }
    });




  }
}
