import { Component, OnInit } from '@angular/core';
import { Amount } from '../../model.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-admin-amount',
  templateUrl: './admin-amount.component.html',
  styleUrls: ['./admin-amount.component.css']
})
export class AdminAmountComponent  implements OnInit{
  amount: Amount[] = [];
  isLoading:boolean=false;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const bearerToken = 'YOUR_BEARER_TOKEN'; // Replace with your actual bearer token
    this.isLoading=true
    this.apiService.getReferals(bearerToken).subscribe(
      (response) => {
        this.isLoading=false
        this.amount = response.listOfReferals; 
        
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  changeStatus(amtId: number) {
    
  }
}