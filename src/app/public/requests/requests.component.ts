import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApiService } from './../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent  {
  
  
  
  requestList:any=[]
  id = localStorage.getItem('user_id')
  recivedRequestList:any=[]
  
  
  isLoading:boolean=false
  constructor(private apiService:ApiService,private router:Router) {
    this.isLoading=true
this.apiService.myRequests(this.id).subscribe(
  (response)=>{
    if(response.status=='Success'){
        this.requestList=response.requestsSentByMe
        this.recivedRequestList=response.requestsRecievedByMe
        this.isLoading=false
    }
    else{
      alert("no requests Found !")
      this.isLoading=false
    }
  },(error)=>{
    alert("no requests found with error: "+ error)
    this.isLoading=false
  }
)
    
  }

  acceptRequest(id:any){
    
    this.apiService.acceptRequest(id).subscribe(
      (response)=>{
        if(response.status=='Success'){
          alert('request accepted! ')
          this.router.navigate(['/cards']);
        }
        else{alert("accept request failed")}

      },(error)=>{
        alert("failed to accept request with eror: "+ error)
      }
    )
  }
  
  
 

}