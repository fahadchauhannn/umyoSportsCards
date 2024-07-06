import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../api.service'
import {RegisterUserDataService} from '../../register-user-data.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  currentUserId:any
  constructor(private apiService: ApiService,private RegisterUserDataService:RegisterUserDataService) {
    // this.RegisterUserDataService.getUserId()
  }

  
ngOnInit(): void {
  
  
}

}