import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  userId:string='';
  constructor(private authService:AuthService) {
  }
  
  ngOnInit(): void {
  }

  getLoggedinUserName = () => {
    return this.authService.getItem('user').name;
  }
 
  getLoggedinUser = () => {
    this.userId = this.authService.getItem('user').id;
    return this.authService.getItem('user').id;
  }
}
