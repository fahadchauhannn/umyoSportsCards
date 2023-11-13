import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-apply-for-referral',
  templateUrl: './apply-for-referral.component.html',
  styleUrls: ['./apply-for-referral.component.css']
})
export class ApplyForReferralComponent {
  constructor(
    
    private apiService: ApiService
  ) {
    this.isLoading=true
    const id = localStorage.getItem('user_id')
   this.user_id  = parseInt(id, 10);
   this.apiService.getUserById(this.user_id).subscribe(
    (response)=>{
      this.userData=response
      this.paymentId=response.Users.payment_id
      this.paymentType=response.Users.payment_method

      if(this.userData.Users.refer_code == '' || this.userData.Users.refer_code == null){
        this.referralAvailable=false
      }
      else{
        this.referralAvailable=true
      }
      this.isLoading=false
    },(error)=>{
      console.log("error", error);
    }

   )

  }
  paymentId:any
  paymentType: any
  referralAvailable:boolean=false
  userData:any
  user_id:any
  isLoading: boolean = false;
  
  saveChanges() { 
    this.isLoading=true
    this.apiService.applyForReferral(this.user_id).subscribe(
      (response) => {
        alert('applied for referral sucessfully')
        this.apiService.getUserById(this.user_id).subscribe(
          (response)=>{
            this.userData=response
            this.paymentId=response.Users.payment_id
            this.paymentType=response.Users.payment_method
              this.referralAvailable=true
            this.isLoading=false
          },(error)=>{
            console.log("error", error);
          }
      
         )

      },
      (error) => {
        console.error('Error applying for referral', error);
      }
    );
  }
  sendpaymentInfo() { 
    this.isLoading=true
    this.apiService.savePaymentInfo(this.user_id,this.paymentId,this.paymentType).subscribe(
      (response) => {
        this.isLoading=false
        alert('payment Info saved')

      },
      (error) => {
        alert("error saving Payment info")
      }
    );
  }
}
