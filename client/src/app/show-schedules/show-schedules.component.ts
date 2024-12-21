import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-show-schedules',
  templateUrl: './show-schedules.component.html',
  styleUrl: './show-schedules.component.css'
})
export class ShowSchedulesComponent implements OnInit {

meetings:any = [];
message = "";
showMessage = false;
userId:string = ''

constructor(private http:HttpClient, private route:ActivatedRoute,private router:Router, private authService:AuthService) { 
  this.userId= this.authService.getItem("user").id
}

ngOnInit(): void {
  this.userId= this.authService.getItem("user").id
  this.route.paramMap.subscribe(params=>{
    const idParam=params.get('userId');
    if(idParam!=null){
      this.userId = idParam;
     this.fetchAllMeetings();
    }
  })
  const state=history.state;
  this.message=state.updatedmsg;
  if(this.message.length) {
    this.showMessage = true;
  }
}

fetchAllMeetings(){
  this.http.get('http://localhost:3000/meetings/'+this.userId).subscribe((response:any)=>
    {this.meetings=response;
    },
  (error)=>{
    this.message = "Error in getting the meetings";
    console.error('Error in getting the meetings',error);});
 }


}
