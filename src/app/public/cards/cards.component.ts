import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../api.service'
import {RegisterUserDataService} from '../../register-user-data.service'
import { Package } from '../../models/package.model';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

import * as QRCode from 'qrcode-generator';


import {
  StripeCardElementOptions,
  StripeElementsOptions,

} from '@stripe/stripe-js';

import { AddCustomerResponse } from './../../models/add-customer-response.model';
import { Subscription } from './../../models/subscription.model';
import { PaymentService } from 'src/app/payment.service';

declare var $: any; 
declare var paypal: any;

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements AfterViewInit{

  // userId:any
  id=localStorage.getItem('user_id')
  cards:any
  packages:any
  selectedPackage:any
  paymentForm:FormGroup
  stripe_customer_id:any=null
  stripe_subscription_id:any=null
  shareCardId:any
  updatedPlanId:any
  userData:any={}
  payload={
    user_id:this.id,
    stripe_subscription_id:null,
    subscription_id:null
  }
  public elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

 
  expiryDateValidator(control: AbstractControl): ValidationErrors | null {
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    if (control.value && !expiryDatePattern.test(control.value)) {
      return { invalidExpiryDate: true };
    }
  
    const [month, year] = control.value.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
  
    if (Number(year) < currentYear || (Number(year) === currentYear && Number(month) < currentMonth)) {
      return { expiredExpiryDate: true };
    }
  
    return null;
  }
  
  cardNumberValidator(control: AbstractControl): ValidationErrors | null {
    const cardNumberPattern = /^\d{16}$/; // Assuming 16 digits for a valid card number
    if (control.value && !cardNumberPattern.test(control.value)) {
      return { invalidCardNumber: true };
    }
    return null;
  }


  generateQr(id:any){
    const typeNumber = 0;
  const errorCorrectionLevel = 'L'; 

  const qrCode = QRCode(typeNumber, errorCorrectionLevel);
  qrCode.addData('https://umyohbcu.site/cards/share-card/' + id);
  qrCode.make();

  // Create a data URI for the QR code image
  const dataURL = qrCode.createDataURL(4, 10);

  // Trigger download
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'qrcode.png';
  link.click();
}

  constructor(private apiService: ApiService,private paymentService:PaymentService,private fb: FormBuilder,) {
    this.apiService.getUserById(parseInt(this.id, 10)).subscribe(
      (response)=>{
        if(response.status=='Success'){
          this.userData=response.Users
   
          this.apiService.getCards(this.payload).subscribe(
            (response)=>{
              if(response.status=='Success'){
                this.cards=response.Card
              }
              else{
                alert("failed to fetch cards.")
              }
          
            },(error)=>{
              alert("failed to fetch cards."+error.message)
            }
          )
          

          const oldSubId=this.userData.subscription_id
          let newSubId=''
          this.updatedPlanId=localStorage.getItem("updatePaypalId")
          const token = localStorage.getItem("updatedToken")
          if(token &&token!=null &&token!=''&& this.updatedPlanId!='' && this.updatedPlanId && this.updatedPlanId!=null){
            // this.showLoadingModal=true
            
      
      
            this.apiService.executeAggrement(token)
            .subscribe(
              (response) => {
                
                if(response.status=='Success'){
                  console.log("Billing agreement executed successfully", response);
                  newSubId=response.subscription_id
                  
                  
                  alert("Subscription Updated Successfully!")
                  this.apiService.cancelPaypalSubscription(this.id,oldSubId).subscribe(
                    (response)=>{
                      if(response.status=='success'){
                        alert("Old Subscription Canclled!")
                        this.paymentService.update_paypal_keys(newSubId,this.id)
                      }
                      else{
                        alert("failed to cancel old subscription! ")
                        
                      }
                    },(error)=>{
                      alert("error " + error)
                    }
                  )
                  
                }
                else{
                  localStorage.removeItem("updatePaypalId");
                  localStorage.removeItem("updatedToken");
                }
                
                
              },
              (error) => {
                console.error("Failed to execute billing agreement", error);
                // this.showLoadingModal=false
                  alert("Failed to Verify Paypal Payment")
                  localStorage.removeItem("updatePaypalId");
                  localStorage.removeItem("updatedToken");
                  window.location.href='https://umyohbcu.site/'
              }
            );
          }

        }
        else{
          alert("failed to fetch user.")
        }
    
      },(error)=>{
        alert("failed to fetch user."+error.message)
      }
    )
   
    


 

this.apiService.getSignUpPackages(null).subscribe(
  (response) => {
    this.packages = response.Package
    
  },
  (error) => {
    console.error('Error fetching users:', error);
  }
)

const cvcLength = 3;
this.paymentForm = this.fb.group({
  cardNumber: ['', [Validators.required, this.cardNumberValidator]],
  expiryDate: ['', [Validators.required, this.expiryDateValidator]],
  cvc: ['', [Validators.required, Validators.minLength(cvcLength), Validators.maxLength(cvcLength)]],
});


  }
  selectPackage(selectedPackage: Package) {
    this.selectedPackage = selectedPackage;
    console.log(this.selectedPackage);
  }
  setShareCard(cardId: any) {
    this.shareCardId = cardId;
    
    
  }
  openShareDialog() {
    const shareUrl = `https://umyohbcu.site//cards/share-card/${this.shareCardId}`;
    const shareText = 'Check out my sports card!';

    // Open a new window for sharing
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
  }


  deleteCard(id:any){
    const payload={
      card_id:id,
      user_id:this.id
    }
    this.apiService.deleteCard(payload).subscribe(
      (response)=>{
        if(response.status=='Success'){
          alert('Card Delted Sucessfully! ')
          this.apiService.getCards(this.payload).subscribe(
            (response)=>{
              if(response.status=='Success'){
                this.cards=response.Card
              }
              else{
                alert("failed to fetch cards.")
              }
          
            },(error)=>{
              alert("failed to fetch cards."+error.message)
            }
          )
          
          
        }
        else{
          alert('Failed to delete Card. ')
        }

      },(error)=>{
        alert('Failed to delete Card. '+ error.message)
      }
    )
  }

  

  payWithPayPal(selectedPackage: any) {
    this.selectedPackage = selectedPackage
    let confirmation:boolean

    

    confirmation=confirm("Are You Sure you want to cancel your old Subscription and update? ")

    if(confirmation){
      this.paymentService.upgradePaypal(this.userData,this.id,selectedPackage)
    }

  } 

  DotsModal:boolean=false


  openDotsModal(){
this.DotsModal=true
  }
  closeDotsModal(){
    this.DotsModal=false
  }
  activeCardId: number | null = null;

  setActiveCard(cardId: number): void {
    this.activeCardId = cardId;
    this.DotsModal=true
  }
  unsetActiveCard(cardId: number): void {
    this.activeCardId = cardId;
    this.DotsModal=false
  }
ngAfterViewInit(): void {
  
}

public cardOptions: StripeCardElementOptions = {
  style: {
    base: {
      fontWeight: 400,
      fontFamily: 'Circular',
      fontSize: '14px',
      iconColor: '#666EE8',
      color: '#002333',
      '::placeholder': {
        color: '#919191',
      },
    },
  },
};



pay(){

  const expiry = this.paymentForm.get("expiryDate").value;
    const expiryMonth = expiry.split("/")[0];
    const expiryYear = expiry.split("/")[1];
const payload={
  subscription_id:this.userData.stripe_subscription_id,
  user_id:this.id
}
let interval:any, interval_count:any;

const expireInValue = this.selectedPackage.expire_in.toLowerCase(); 

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
  this.apiService.cancelStripeSubscription(payload).subscribe(
    (response)=>{
      if(response.status=='Success'){
        console.log('res after cancel strip subs'+ response.message)


        
        this.apiService.AddCustomer({
          "name": this.userData.firstname + ' ' + this.userData.lastname,
          "phone": this.userData.phone,
          "email": this.userData.email,
          "description": this.selectedPackage.description,
          "card_number": this.paymentForm.get("cardNumber").value,
          "exp_month": expiryMonth,
          "exp_year": expiryYear,
          "cvc": this.paymentForm.get("cvc").value,
          "price": this.selectedPackage.net_price ? this.selectedPackage.net_price : this.selectedPackage.price,
          "interval": interval,
          "interval_count": interval_count,
          "stripe_subscription_id":this.userData.stripe_subscription_id
        }).subscribe((response: AddCustomerResponse) => {
          console.log(response)
          this.stripe_customer_id=response?.customer_id
          if (response.status == 'Success') {
            
            this.apiService.AddProductPriceSubscription({
              "name": this.selectedPackage.description,
              "description": this.selectedPackage.description,
              "price": this.selectedPackage.net_price ? this.selectedPackage.net_price : this.selectedPackage.price,
              "interval": interval,
              "interval_count": interval_count,
              "customer_id": response.customer_id
            }).subscribe((response: Subscription) => {
              console.log(response)
              this.stripe_subscription_id=response?.subsription_id
              if (response.status == "Success") {
                
                
                const updataPayload={
                  customer_id:this.id,
                  stripe_customer_id:this.stripe_customer_id,
                  stripe_subscription_id:this.stripe_subscription_id,
                }
    
                this.apiService.updateSubscriptionId(updataPayload).subscribe(
                  (response)=>{
                    if(response.status=='Success'){
                      const updataPackagePayload={
                        package_id:this.selectedPackage.id,
                        user_id:this.id

                      }
                      this.apiService.updateUserPackage(updataPackagePayload).subscribe(
                        (response)=>{
                            if(response.status=='Success'){

                              this.userData=response.User
                              alert("Package Upgraded Successfully !")
                            }
                            else{alert(response.message)}
                        },error=>{error.error.message}
                      )
                    }
                    else{
                      alert(response.status + response.message)
                    }
                    
                  },error=>{alert(error.error.message)}
                )
                
                
    
    
                
              } else {
                alert(response.message)
              }
            },error=>{alert(error.error.message)})
          } else {
            alert("failesd"+response.message)
          }
        }, error => alert(error.error.message))
      }else{alert("failed to cancel existing subscription")}
    },error=>alert(error.error.message)
  )


}

}
