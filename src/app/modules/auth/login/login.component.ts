import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    sessionStorage.setItem('account',JSON.stringify(this.loginForm.value))
    this.router.navigate([''])
  }
}
