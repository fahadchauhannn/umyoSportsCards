import { Injectable ,EventEmitter } from '@angular/core';
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

  loadingStatus = new EventEmitter<boolean>();
   
  constructor(
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {}
   userData: any = {};
   stripe_customer_id:any=null
   stripe_subscription_id:any=null
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
    let interval:any, interval_count:any;

const expireInValue = selectedPackage.expire_in.toLowerCase(); 

if (expireInValue.includes("year")) {
  interval = "year";
  interval_count = 1;
} else if (expireInValue.includes("6 month")) {
  interval = "month";
  interval_count = 6;
} else if (expireInValue.includes("month")) {
  interval = "month";
  interval_count = 1;
} else {
  
  interval = "month";
  interval_count = 1;
}
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
      "interval": interval,
      "interval_count": interval_count
    }).subscribe((response: AddCustomerResponse) => {
      console.log(response)
      this.stripe_customer_id=response?.customer_id
      if (response.status == 'Success') {
        
        this.apiService.AddProductPriceSubscription({
          "name": selectedPackage.description,
          "description": selectedPackage.description,
          "price": selectedPackage.net_price ? selectedPackage.net_price : selectedPackage.price,
          "interval": interval,
          "interval_count": interval_count,
          "customer_id": response.customer_id
        }).subscribe((response: Subscription) => {
          console.log(response)
          this.stripe_subscription_id=response?.subsription_id
          if (response.status == "Success") {
            // proceed to email verification screen
            this.setUserData({

              firstname: form3.get('registerFirstName').value,
              lastname: form3.get('registerLastName').value,
              phone: form3.get('registerPhone').value,
              email: form3.get('registerEmail').value,
              password: form3.get('registerPassword').value,
              country: "",
              sub_category: "",
              stripe_customer_id:this.stripe_customer_id,
              stripe_subscription_id:this.stripe_subscription_id,
              friend_id: null,
              package_id: selectedPackage.id,
              balance_transaction: null,
              balance_transaction_type: 'stripe',
              business_type: form3.get('registerBusiness')?.value,
              sport_type: form3.get('registerSportType')?.value,
              age_type: form3.get('registerAgeType')?.value,
              
              state: form3.get('registerStateType')?.value,
              city: form3.get('registerCityType')?.value,
              location: form3.get('registerLocation')?.value,
              race: form3.get('registerRaceType')?.value,
              gender: form3.get('registerGenderType')?.value,
              truckType: form3.get('registerTypeOfTrucks')?.value,
              truckLoad: form3.get('registerTruckLoads')?.value,
              commonCarrier: form3.get('registerCommonCarrier')?.value,
              truckService: form3.get('registerTruckService')?.value,

              division: form3.get('registerDivision')?.value,
      position: form3.get('registerPosition')?.value,
      team: form3.get('registerTeam')?.value,
      year: form3.get('registerYear')?.value,
      trophy: form3.get('registerTrophy')?.value,
      honor: form3.get('registerHonor')?.value,
        
                            
        
        
        
              reffered_from: form3.get('registerReferralCode').value,


              
              

              
            });

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
                  this.loadingStatus.emit(false);
                }
                
              }
            )
            
            


            
          } else {
            alert(response.message)
            this.loadingStatus.emit(false);
          }
        })
      } else {
        alert("Payment Failed")
        this.loadingStatus.emit(false);
      }
    }, error => {

      alert(error.error.message)
      this.loadingStatus.emit(false);
    }
  )

  }





  testing(form3:any, selectedPackage: Package){

    this.setUserData({
       
      friend_id: null,
      package_id: selectedPackage.id,
      balance_transaction: null,
      balance_transaction_type: null,
    
      firstname: form3.get('registerFirstName').value,
      lastname: form3.get('registerLastName').value,
      phone: form3.get('registerPhone').value,
      email: form3.get('registerEmail').value,
      password: form3.get('registerPassword').value,

      
      business_type: form3.get('registerBusiness')?.value,
      sport_type: form3.get('registerSportType')?.value,
      age_type: form3.get('registerAgeType')?.value,
      
      state: form3.get('registerStateType')?.value,
      city: form3.get('registerCityType')?.value,
      location: form3.get('registerLocation')?.value,
      race: form3.get('registerRaceType')?.value,
      gender: form3.get('registerGenderType')?.value,
      truckType: form3.get('registerTypeOfTrucks')?.value,
      truckLoad: form3.get('registerTruckLoads')?.value,
      commonCarrier: form3.get('registerCommonCarrier')?.value,
      truckService: form3.get('registerTruckService')?.value,

      division: form3.get('registerDivision')?.value,
      position: form3.get('registerPosition')?.value,
      team: form3.get('registerTeam')?.value,
      year: form3.get('registerYear')?.value,
      trophy: form3.get('registerTrophy')?.value,
      honor: form3.get('registerHonor')?.value,





      
              

      reffered_from: form3.get('registerReferralCode').value,





      



      
      
    });

    this.apiService.registerUser(this.userData).subscribe(
      (response: registerResponse)=>{
        if(response.status==200){
          localStorage.setItem('access_token', response.access_token);
          localStorage.setItem('firstname', response.user.firstname);
localStorage.setItem('lastname', response.user.lastname);
localStorage.setItem('phone', response.user.phone);
localStorage.setItem('email', response.user.email);
localStorage.setItem('user_id', response.user.id.toString());

          this.router.navigate(['/email-verification']);
        }
        else{
          alert(response.status + response.message)
        }
        
      }
    )
    


  }


  paypal_create_billing_plan(form3:any, selectedPackage: Package){
    let planID=''
    let approval_url=''
    let interval:any, interval_count:any;

const expireInValue = selectedPackage.expire_in.toLowerCase(); 

if (expireInValue.includes("year")) {
  interval = "YEAR";
  interval_count = 1;
} else if (expireInValue.includes("6 month")) {
  interval = "MONTH";
  interval_count = 6;
} else if (expireInValue.includes("month")) {
  interval = "MONTH";
  interval_count = 1;
} else {
  
  interval = "MONTH";
  interval_count = 1;
}

  const payload = {
    product_name: selectedPackage.description,
    product_description: selectedPackage.description,
    product_price: selectedPackage.net_price ? selectedPackage.net_price : selectedPackage.price,
    interval: interval,
    interval_count: interval_count
  };
    this.apiService.createBillingPlan(payload)
    .subscribe(
      (response) => {
        planID = response.plan_id;
        console.log("Test: Created billing plan with ID " + planID);
        const approvalLink = response.approval_url
        console.log("this is approval link"+approvalLink);
        
        this.setUserData({

          firstname: form3.get('registerFirstName').value,
          lastname: form3.get('registerLastName').value,
          phone: form3.get('registerPhone').value,
          email: form3.get('registerEmail').value,
          password: form3.get('registerPassword').value,
          country: "",
          
          sub_category: "",
          stripe_customer_id:this.stripe_customer_id,
          stripe_subscription_id:this.stripe_subscription_id,
          friend_id: null,
          package_id: selectedPackage.id,
          balance_transaction: null,
          balance_transaction_type: 'paypal',
          
          state: form3.get('registerStateType')?.value,
          reffered_from: form3.get('registerReferralCode').value,
          location: form3.get('registerLocation')?.value,
          city: form3.get('registerCityType')?.value,
          race: form3.get('registerRaceType')?.value,
          gender: form3.get('registerGenderType')?.value,
          plan_id:response.plan_id,

          business_type: form3.get('registerBusiness')?.value,
      sport_type: form3.get('registerSportType')?.value,
      age_type: form3.get('registerAgeType')?.value,
      
      
      
      
      
      
      truckType: form3.get('registerTypeOfTrucks')?.value,
      truckLoad: form3.get('registerTruckLoads')?.value,
      commonCarrier: form3.get('registerCommonCarrier')?.value,

      truckService: form3.get('registerTruckService')?.value,
      division: form3.get('registerDivision')?.value,
      position: form3.get('registerPosition')?.value,
      team: form3.get('registerTeam')?.value,
      year: form3.get('registerYear')?.value,
      trophy: form3.get('registerTrophy')?.value,
      honor: form3.get('registerHonor')?.value,


      

});
localStorage.setItem('register_vale',JSON.stringify(this.userData))
        window.location.href = approvalLink;
        
      },
      (error) => {
        console.error("Test: Failed to create billing plan", error);
       



      }
    )
   

    

  }
  paypal_upgrade_billing_plan(userData:any, selectedPackage: Package){
    let planID=''
    let approval_url=''
    let interval:any, interval_count:any;

const expireInValue = selectedPackage.expire_in.toLowerCase(); 

if (expireInValue.includes("year")) {
  interval = "YEAR";
  interval_count = 1;
} else if (expireInValue.includes("6 month")) {
  interval = "MONTH";
  interval_count = 6;
} else if (expireInValue.includes("month")) {
  interval = "MONTH";
  interval_count = 1;
} else {
  
  interval = "MONTH";
  interval_count = 1;
}

  const payload = {
    product_name: selectedPackage.description,
    product_description: selectedPackage.description,
    product_price: selectedPackage.net_price ? selectedPackage.net_price : selectedPackage.price,
    interval: interval,
    interval_count: interval_count
  };
    this.apiService.createBillingPlan(payload)
    .subscribe(
      (response) => {
        planID = response.plan_id;
        console.log("Test: Created billing plan with ID " + planID);
        const approvalLink = response.approval_url
        console.log("this is approval link"+approvalLink);
        
localStorage.setItem('updatePaypalId',response.plan_id)
        window.location.href = approvalLink;
        
      },
      (error) => {
        console.error("Test: Failed to create billing plan", error);
          alert("Failed To upgrade your Package.")
        this.loadingStatus.emit(false);
       


      }
    )
   

  }

  


paypal_Register_user(subsription_id:any){
  this.setUserData(JSON.parse(localStorage.getItem('register_vale')))
  this.userData.subscription_id = subsription_id
  this.apiService.registerUser(this.userData).subscribe(
    (response: registerResponse)=>{
      if(response.status==200){
        localStorage.removeItem("register_vale");
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('firstname', response.user.firstname);
localStorage.setItem('lastname', response.user.lastname);
localStorage.setItem('phone', response.user.phone);
localStorage.setItem('email', response.user.email);
localStorage.setItem('user_id', response.user.id.toString());
this.loadingStatus.emit(false);
        this.router.navigate(['/email-verification']);
      }
      else{
        alert(response.status + response.message)
      }
    }
  )
}




upgradePaypal(userData:any,user_id:any,selectedPackage:any){
this.paypal_upgrade_billing_plan(userData,selectedPackage)
}
  

update_paypal_keys(subscription_id:any,user_id:any){
 const planID= localStorage.getItem("updatePaypalId")
  this.apiService.updatePaypalKeys(user_id,subscription_id,planID).subscribe(
    (response)=>{
      if(response.status=='Success'){
        alert(response.message)
        localStorage.removeItem("updatePaypalId");
                  localStorage.removeItem("updatedToken");
      }
      else{
        alert(response.message)
        localStorage.removeItem("updatePaypalId");
                  localStorage.removeItem("updatedToken");
      }
    },(error)=>{
      alert("error"+error)
      localStorage.removeItem("updatePaypalId");
                  localStorage.removeItem("updatedToken");
    }
  )

}
}



