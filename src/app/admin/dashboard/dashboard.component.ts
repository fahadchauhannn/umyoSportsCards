import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
isLoading:boolean=false
UsersUsage:any
CardUsage:any
admin_text:string=''
  constructor(
    
    private apiService: ApiService,
    
  ) {}

  ngOnInit(): void {
    this.isLoading=true
    this.apiService.usage().subscribe(
      (response)=>{
this.UsersUsage=response.UsersUsage
this.CardUsage=response.CardUsage
this.isLoading=false
      }

    )
    
  }

  
adminText(){
  this.apiService.adminText(this.admin_text).subscribe(
    (response)=>{
      console.log('successfully set admin text');
      console.log(this.admin_text);
    }
  )
}
}

