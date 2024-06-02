import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-bonus-amount',
  templateUrl: './bonus-amount.component.html',
  styleUrls: ['./bonus-amount.component.css']
})
export class BonusAmountComponent implements OnInit{

  isLoading:boolean=true
  amountData:any

  constructor(private apiService: ApiService){ }


  ngOnInit(): void {

    
    this.isLoading = true;
    
     const id = localStorage.getItem('user_id')
     

     
     this.apiService.getUserReferals(id).subscribe(
      (response)=>{
        this.amountData=response.listOfReferals
        console.log('this is the amount data');
        console.log(this.amountData);
        this.isLoading=false
      },(error) => {
        console.error('Error fetching user:', error);
      }
     )
  }

}
