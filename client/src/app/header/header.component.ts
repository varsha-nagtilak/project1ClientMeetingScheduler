import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userId:string='';
  isLoggedin:boolean=false;
  constructor(private authService:AuthService, private router:Router) {
    this.isLoggedin = false;
    this.authService.setItem('isLoggedin', false)
  }
  logout=() => {
    console.log("logout")
    this.authService.setItem('isLoggedin', false);
    this.authService.removeItem('user');
    this.isLoggedin = false;
    this.router.navigate(['/login']);
  }
  isUserLoggedIn = () => {
    this.isLoggedin = this.authService.getItem('isLoggedin');
    console.log("this.isLoggedin", this.isLoggedin)
    return this.isLoggedin;
  }
  getLoggedinUser = () => {
    this.userId = this.authService.getItem('user').id;
    return this.authService.getItem('user').id;
  }
}
