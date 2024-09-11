import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../core/models/user/user';
import { ToastService } from 'angular-toastify';
import { AuthService } from '../../../core/services/auth-service/auth.service';
import { LoadingService } from '../../../core/services/loading-service/loading.service';
import { LoginRes } from '../../../core/models/auth-model/login-res.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loadingService: LoadingService,
    private _toastService: ToastService
  ){}

  user: User | undefined; 
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
    if (!this.loginForm.valid) return this._toastService.error('Error Valid!');

    this.loadingService.showLoading().subscribe({
      next: async () =>  {
        try {
          const token = await this.fetchToken();
          if(!token) return this._toastService.error('Error Token Not Found!');
          this.authService.setToken(token);
          const user = await this.checkAuthorization();
          if(!user) return this._toastService.error('Error User Not Found!');
          this.authService.setUser(user);
        } catch (error) {
          if(error == 'token') this._toastService.error('Error fetching token.');
          if(error == 'login') this._toastService.error('Login failed. Please try again.');
        } finally {
          this.loadingService.closeLoading();
          this._toastService.success('Login successful!');
          setTimeout(() => {
            this.router.navigate([''])
          }, 1000);
        }
      },
      complete: () => {
        this.loadingService.closeLoading()
      },
      error: () => {
        this.loadingService.closeLoading()
      }
    })
  }

  fetchToken(): Promise<string> {
    const dataToken = {
      userId: this.loginForm.value.username,
      userPassword: this.loginForm.value.password,
    };
  
    return new Promise((resolve, reject) => {
      this.authService.fetchToken(dataToken).subscribe({
        next: (res) => resolve(res.token),
        error: (err) => reject('token')
      });
    });
  }

  checkAuthorization(): Promise<User> {
    const data = {
      emp_id: '',
      user_name: this.loginForm.value.username,
      user_pass: this.loginForm.value.password,
    }
  
    return new Promise((resolve, reject) => {
      this.authService.login(data).subscribe({
        next: (res) => resolve(res[0]),
        error: (err) => reject('login')
      });
    });
  }
  
}
