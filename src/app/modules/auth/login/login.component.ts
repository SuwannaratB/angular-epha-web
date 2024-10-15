import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../core/models/user/user';
import { ToastService } from 'angular-toastify';
import { AuthService } from '../../../core/services/auth-service/auth.service';
import { LoadingService } from '../../../core/services/loading-service/loading.service';
import { LoginRes } from '../../../core/models/auth-model/login-res.model';
import { CookieService } from 'ngx-cookie-service';

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
    private cookieService: CookieService,
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

  // onLogin(): void {
  //   const data = {
  //     emp_id: '',
  //     user_name: this.loginForm.value.username,
  //     user_pass: this.loginForm.value.password,
  //   };

  //   this.authService.login(data).subscribe({
  //     next: (res) => {
  //       const decodedData = this.htmlDecode(data);
            
  //       // Step 2: Try to parse the decoded data as JSON
  //       const jsonData = JSON.parse(decodedData!);

  //       console.log("Decoded and Parsed Data:", jsonData);
  //     },
  //     error: (err) => {
  //       console.error('Login error', err);
  //     }
  //   });
  // }

   htmlDecode(input: string) {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
  }

  onLogin():void {
    if (!this.loginForm.valid) return this._toastService.error('Error Valid!');

    this.loadingService.showLoading().subscribe({
      next: async () =>  {
        try {
          // token
          const token = await this.fetchToken();
          if(!token) return this._toastService.error('Error Token Not Found!');
          this.authService.setToken(token);
          this.cookieService.set('X-CSRF-TOKEN', token, {
            domain: 'qas-epha.thaioilgroup.com',
            path: '/service',
            secure: true,
            sameSite: 'None'
          });
          // user
          const user = await this.checkAuthorization();
          if(!user) return this._toastService.error('Error User Not Found!');
          this.authService.setUser(user);
          // success
          this.loadingService.closeLoading();
          this._toastService.success('Login successful!');
          setTimeout(() => {
            this.router.navigate([''])
          }, 1000);
        } catch (error) {
          if(error == 'token') this._toastService.error('Error fetching token.');
          if(error == 'login') this._toastService.error('Login failed. Please try again.');
        } finally {
          // setTimeout(() => {
          //   this.router.navigate([''])
          // }, 1000);
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
      this.authService.fetchToken().subscribe({
        next: (res) => resolve(res.csrfToken),
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
        next: (res) => resolve(res),
        error: (err) => console.log(err)
      });
    });
  }
  
}
