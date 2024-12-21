import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit{
  topic:string='';
  noOfPeoples:string=''
  startDateTime:string=''
  endDateTime:string=''
  message:string=''
  isInValid:boolean=false
  userId:string=""
  error:string="";
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }
  
  scheduleMeteeting(){
    const isFormValid = !this.topic.length  && !this.noOfPeoples.length && !this.startDateTime.length && !this.endDateTime.length;
    if(!isFormValid) {

    const meetingDetails={
      topic:this.topic,
      noOfPeoples:+this.noOfPeoples,
      startDateTime:this.startDateTime.toString(),
      endDateTime:this.endDateTime.toString(),
      userId: this.authService.getItem("user").id
    };
    this.userId = this.authService.getItem("user").id
      this.http.post('http://localhost:3000/scheduleMeteeting',meetingDetails)
      .subscribe((response:any)=>
        {
          this.isInValid = false;
          this.message="Meeting created successfully!!!"
          this.router.navigate(['/show-meetings/'+this.userId],{state:{updatedmsg:this.message}});
        },
      (error)=>{
        this.error = "Please enter correct field values."
        this.isInValid = true;
      }
    )
  } else {
    this.error = "Please enter all fields."
    this.isInValid = true;
  }
  }
}
