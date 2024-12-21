import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  name:string='';
  email:string=''
  repeatPassword:string=''
  password:string=''
  address:string=''
  message:string=''
  isValid:boolean=false
  isInvalid:boolean=false;
  error="";
  
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
 
  register(){
    const isFormValid = !this.email.length  && !this.repeatPassword.length && !this.password.length && !this.name.length;
    if(!isFormValid) {
      const userDetails={
        name:this.name,
        email:this.email,
        password:this.password,
        address:this.address
      };
      if(this.password === this.repeatPassword) {
        this.http.post('http://localhost:3000/createUser',userDetails)
        .subscribe((response:any)=>
          {
            this.message = "User Careted successfully. Please login with credentials"
            this.router.navigate(['/login'],{state:{updatedmsg:this.message}});
          },
        (err)=>{
          this.isInvalid = true;
          console.log(err);
          this.error = err.message;
        }
      )
        
      } else {
        this.isInvalid = true;
        this.error = "Repeate password is incorrect."
      }

    } else {
        this.isInvalid = true;
        this.error = "Please enter all the fields."

    }

   
  }
}
