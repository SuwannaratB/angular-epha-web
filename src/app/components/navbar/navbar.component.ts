import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { User } from '../../core/models/user/user';
import { AuthService } from '../../core/services/auth-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  constructor(
    private route: Router,
    private authService: AuthService,
    private toastService: ToastService
  ){}
  
  user: User | undefined;

  ngOnInit(): void {
    this.fecthUser();
  }

  fecthUser(): void {
    this.user = this.authService.getUser()
  }

  onLogut():void {
    this.authService.clearUser();
    this.route.navigate(['auth'])
  }

  addInfoToast() {
    this.toastService.info('message');
  }

 navigateMasterData(): void {
  this.route.navigate(['master'])
 }

}

