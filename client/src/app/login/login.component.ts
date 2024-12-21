import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email:string='';
  password:string=''
  message:string=''
  isInValid:boolean=false
  showMessage=false
  error=""

  constructor(private http:HttpClient, route:ActivatedRoute,private router:Router, private authService:AuthService) {
  }

  ngOnInit(): void {
    const state=history.state;
    this.message=state.updatedmsg;
    if(this.message?.length) {
      this.showMessage = true;
    }
  }

  login(){
    this.showMessage = false;
    this.message='';
    const isFormValid = !this.email.length && !this.password.length;

    if(!isFormValid) {
    const userDetails={
      email:this.email,
      password:this.password,
    };
      this.http.post('http://localhost:3000/login',userDetails)
      .subscribe((response:any)=>
        {
          this.authService.setItem("isLoggedin", true);
          this.authService.setItem("user", response);
          this.router.navigate(['/home']);
          this.isInValid = false;
        },
      (error)=>{
        this.error = "Please enter correct username or password";
        this.isInValid = true;
      }
    )
  } else {
    this.isInValid = true;
    this.error='Email and Password are required fields.'
  }
  }
}

