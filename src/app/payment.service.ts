import { Injectable } from '@angular/core';
import { ApiService } from './api.service'; 
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { StripeService } from 'ngx-stripe';
import { Package } from './models/package.model';
import { AddCustomerResponse } from './models/add-customer-response.model';
import { Subscription } from './models/subscription.model';
import {User,registerResponse} from './models/register-response.model'
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {}
   userData: any = {};

  setUserData(data: any) {
    this.userData = data;
  }
  getUserData() {
    return this.userData;
  }
  
  createPaymentIntent(paymentForm: any,form3:any, selectedPackage: Package) {
    const expiry = paymentForm.get("expiryDate").value;
    const expiryMonth = expiry.split("/")[0];
    const expiryYear = expiry.split("/")[1];
    console.log(expiryMonth + ' ' + expiryYear)
    this.apiService.AddCustomer({
      "name": form3.get('registerFirstName').value + ' ' + form3.get('registerLastName').value,
      "phone": form3.get('registerPhone').value,
      "email": form3.get('registerEmail').value,
      "description": selectedPackage.description,
      "card_number": paymentForm.get("cardNumber").value,
      "exp_month": expiryMonth,
      "exp_year": expiryYear,
      "cvc": paymentForm.get("cvc").value,
      "price": selectedPackage.net_price ? selectedPackage.net_price : selectedPackage.price,
      "interval": "month",
      "interval_count": 6
    }).subscribe((response: AddCustomerResponse) => {
      console.log(response)
      if (response.status == 'Success') {
        this.apiService.AddProductPriceSubscription({
          "name": selectedPackage.description,
          "description": selectedPackage.description,
          "price": selectedPackage.net_price ? selectedPackage.net_price : selectedPackage.price,
          "interval": "month",
          "interval_count": 6,
          "customer_id": response.customer_id
        }).subscribe((response: Subscription) => {
          console.log(response)
          if (response.status == "Success") {
            // proceed to email verification screen
            this.setUserData({
              firstname: form3.get('registerFirstName').value,
              lastname: form3.get('registerLastName').value,
              phone: form3.get('registerPhone').value,
              email: form3.get('registerEmail').value,
              password: form3.get('registerPassword').value,
              country: form3.get('registerCountry').value,
              business_type: form3.get('registerBusinessType').value,
              sub_category: "",
              friend_id: null,
              package_id: selectedPackage.id,
              balance_transaction: null,
              balance_transaction_type: null,
              sport_type: form3.get('registerSportType').value,
              age_type: form3.get('registerAgeType').value,
              position: form3.get('registerPositionType').value,
              state: form3.get('registerStateType').value,
              reffered_from: form3.get('registerReferralCode').value,
              
            });
            // this.userData=response

            this.apiService.registerUser(this.userData).subscribe(
              (response: registerResponse)=>{
                if(response.status==200){
                  localStorage.setItem('access_token', response.access_token);
                  localStorage.setItem('firstname', response.user.firstname);
      localStorage.setItem('lastname', response.user.lastname);
      localStorage.setItem('phone', response.user.phone);
      localStorage.setItem('email', response.user.email);
      localStorage.setItem('user_id', response.user.id.toString());
      localStorage.setItem('pg_id', this.userData.package_id);
                  this.router.navigate(['/email-verification']);
                }
                else{
                  alert(response.status + response.message)
                }
                
              }
            )
            
            


            
          } else {
            alert(response.message)
          }
        })
      } else {
        alert("failesd")
      }
    }, error => alert(error.error.message))
  }
}

