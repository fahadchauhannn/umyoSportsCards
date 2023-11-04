import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../api.service'
import {RegisterUserDataService} from '../../register-user-data.service'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  // userId:any

  constructor(private apiService: ApiService,private RegisterUserDataService:RegisterUserDataService) {
    // this.RegisterUserDataService.getUserId()
  }


ngOnInit(): void {
  
  
}

}
