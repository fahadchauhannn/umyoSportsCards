import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StripeCardNumberComponent, StripeService } from 'ngx-stripe';
import {StripeCardElementOptions} from '@stripe/stripe-js';
import { Package } from '../models/package.model';
declare var $: any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

showLoginTab: boolean;
showAgeModal: boolean=false;
showRegisterTab: boolean;
isMoreTextVisible:boolean = false;
showStripeModal:boolean = false;
showPackageModal:boolean = false;
showPolicyModal:boolean=false
showRefundModal:boolean=false
showTermsModal:boolean=false
showLoadingModal:boolean=false
packages: any[] = [];
slides1: any[] = [];
slides2: any[] = [];
email: string = ''
password: string = ''
form: FormGroup;
positionType: any = []
businessType: any = []
sportType: any = []
ageType: any = []
selectedSport: any
form2: FormGroup;
submitButtonClicked = false;
form3: FormGroup
selectedPackage: Package = null;
cardsSearched:any=[]
paymentForm:FormGroup
planID:any
elements: any; 
cardElement: any; 
mode:any

ngOnInit(): void {
  this.route.fragment.subscribe(fragment => {
    
    if (fragment === 'regis') {
      this.showLoginTab = false;
      this.showRegisterTab = true;
    } else {
      
      this.showLoginTab = true;
      this.showRegisterTab = false;
    }
  });

  const videoPath = 'assets/video.mp4';
  this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
  
}



confirmAge() {
  
  this.showAgeModal=false;
    if (this.mode == 'signup') {
      this.mode = '';
      this.openPackageModal();
    }
    if (this.mode == 'login') {
      this.mode = '';
      this.login();
    }
  
}

closeAgeModal() {
 this.showAgeModal=false
}

openAgeModal(value: any) {
  this.mode = value;
  this.showAgeModal = true;
}


  
  openPackageModal() {
    this.apiService.checkEmail(this.form3.get('registerEmail')?.value).subscribe(
      (response)=>{
        if(response.status=='Success' || response.message==='Email is already registered.'){
          alert("This Email is already Registered with another account!")
        }
        else{
          this.showPackageModal = true;
        }
      }
    )
  }
  openStripeModal() {
    this.showStripeModal = true;
    this.closePackageModal()
  }
  openTermsModal(){
    this.showTermsModal = true;
  }
  openRefundModal(){
    this.showRefundModal = true;
  }
  openPolicyModal(){
    this.showPolicyModal = true;
  }
  closeStripeModal() {
    this.showStripeModal = false;
  }
  closePackageModal() {
    this.showPackageModal = false;
  }
  closeTermsModal() {
    this.showTermsModal = false;
  }
  closePolicyModal() {
    this.showPolicyModal = false;
  }
  closeRefundModal() {
    this.showRefundModal = false;
  }
  

  // check route for mobile view for registration and login tab
  checkRoute(){
    this.route.fragment.subscribe(fragment => {
      
      if (fragment === 'regis') {
        this.showLoginTab = false;
        this.showRegisterTab = true;
      } else {
        this.showLoginTab = true;
        this.showRegisterTab = false;
      }
    });
  }
  
  // toggle read more buttons 
  toggleMoreText(): void {
    this.isMoreTextVisible = !this.isMoreTextVisible;
  }
  isMoreTextVisible2 = false;
  toggleMoreText2(): void {
    this.isMoreTextVisible2 = !this.isMoreTextVisible2;
  }



  // search cards 
  searchCards(){
    const business_type = this.form2.get('selectedBusinessType').value;
    const age_type = this.form2.get('selectedAgeType').value;
    const sports_type = this.form2.get('selectedSportType').value;
    const position = this.form2.get('selectedPositionType').value;
    const state = this.form2.get('selectedStateType').value;
    const city = this.form2.get('selectedCity').value;
    const location = this.form2.get('selectedLocation').value;
    const name = this.form2.get('selectedName').value;
    const gender = this.form2.get('selectedGender').value;
    const race = this.form2.get('selectedRace').value;
    
    this.apiService.searchCard(business_type,age_type,sports_type,position,state,city,location,name,gender,race).subscribe(
      (response)=>{
        this.cardsSearched=response.Cards
        console.log(response);
      }
    )
  }

  
  selectPackage(selectedPackage: Package) {
    this.selectedPackage = selectedPackage;
    console.log(this.selectedPackage);
  }



  
  
  submitForm() {

    if (!this.form3.valid) {
      this.submitButtonClicked = true;
      
    }
    if (this.form3.valid) {
      this.submitButtonClicked = false;
    }
  }




  getBusniessType() {
    this.apiService.getBusinessType().subscribe(
      (response) =>
        this.businessType = response.Categories
    )
  }
  



  login() {

    

    const emailControl = this.form.get('email');
    const passwordControl = this.form.get('password');

    if (emailControl && passwordControl) {
      if (this.form.valid) {
        const email = emailControl.value;
        const password = passwordControl.value;

        this.apiService.publicLogin(email, 0, password).subscribe((response) => {
          if(response.status==200){
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('firstname', response.user.firstname);
      localStorage.setItem('lastname', response.user.lastname);
      localStorage.setItem('phone', response.user.phone);
      localStorage.setItem('email', response.user.email);
      localStorage.setItem('user_id', response.user.id.toString());
      localStorage.setItem('pg_id', "0");
                  this.router.navigate(['/cards']);
          }
          
          else if(response.error=='Unauthorized'){
            alert("login Failed: Unauthorized")
          }
          else{
            alert("login Failed: Unauthorized")
          }
        },(error)=>{
          alert("login Failed: Unauthorized")
        });
      } else {
        alert("invalid login form")
      }
    }
  }

  

 // VALIDATORS FOR FORMS  

  emailMatchValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
    const email = control.get('registerEmail');
    const confirmEmail = control.get('registerConfirmEmail');

    // Return an error if the emails don't match
    if (email?.value !== confirmEmail?.value) {
      return { emailMismatch: true };
    }

    return null;
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
  videoUrl: SafeResourceUrl;

  constructor(private apiService: ApiService, private fb: FormBuilder,  private http: HttpClient,private route: ActivatedRoute,
    private router: Router, private paymentService: PaymentService,private sanitizer: DomSanitizer) {

      const token = new URLSearchParams(window.location.search).get('token');
      const updatedPlanId=localStorage.getItem("updatePaypalId")
      
      if(updatedPlanId!=null && updatedPlanId){
        localStorage.setItem("updatedToken",token)
      }
      //check if user already available (redirect to cards)
const email= localStorage.getItem('email')
const access_token= localStorage.getItem('access_token')
const user_id=localStorage.getItem('user_id')
if (email !== null && email !== '' && access_token !== null && access_token !== '' && user_id !== null && user_id !== '') {
this.router.navigate(['/cards'])}
      


  
      
      if(token && (updatedPlanId=='' || updatedPlanId==null)){
        this.showLoadingModal=true
        
        this.apiService.executeAggrement(token)
        .subscribe(
          (response) => {
            // Subscription is now active
            if(response.status=='Success'){
              console.log("Billing agreement executed successfully", response);
              this.paymentService.paypal_Register_user(response.subscription_id)
            }
            
            
          },
          (error) => {
            console.error("Failed to execute billing agreement", error);
            this.showLoadingModal=false
              alert("Failed to Verify Paypal Payment")
              window.location.href='https://prolivingbiz.com'
          }
        );
      }

      



    // form is login form 
    // form2 is search of cards form 
    // from 3 is registration form 
  const cvcLength = 3;
  this.paymentForm = this.fb.group({
  cardNumber: ['', [Validators.required, this.cardNumberValidator]],
  expiryDate: ['', [Validators.required, this.expiryDateValidator]],
  cvc: ['', [Validators.required, Validators.minLength(cvcLength), Validators.maxLength(cvcLength)]],
});
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.form2 = this.fb.group({
      selectedBusinessType: [''],
      selectedAgeType: [''],
      selectedSportType: [''],
      selectedPositionType: [''],
      selectedStateType: [''],
      selectedName: [''],
      selectedRace: [''],
      selectedLocation: [''],
      selectedGender: [''],
      selectedCity: [''],
    });
    this.form3 = this.fb.group({
      registerFirstName: ['', Validators.required],
      registerLastName: ['', Validators.required],
      registerEmail: ['', [Validators.required, Validators.email]],
      registerConfirmEmail: ['', [Validators.required, Validators.email]],
      registerPassword: ['', [Validators.required, Validators.minLength(6)]],
      registerPhone: ['', Validators.required],
      // registerCountry: ['', Validators.required],
      registerBusinessType: ['', Validators.required],
      // registerAgeType: ['', Validators.required],
      registerLocationType: ['', Validators.required],
      registerCityType: ['', Validators.required],
      registerRaceType: ['', Validators.required],
      registerGenderType: ['', Validators.required],
      // registerSportType: ['', Validators.required],
      // registerPositionType: ['', Validators.required],
      registerStateType: ['', Validators.required],
      registerReferralCode: [''], // Not required
    }, { validators: this.emailMatchValidator })


    this.getBusniessType()

    // fetch packages
    this.apiService.getSignUpPackages(null).subscribe(
      (response) => {
        this.packages = response.Package
        console.log(response.Package);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );

    
  }

  
  



// STRIPE PAYMENT 
@ViewChild(StripeCardNumberComponent) card: StripeCardNumberComponent;

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

pay(): void {
this.paymentService.createPaymentIntent(this.paymentForm, this.form3,this.selectedPackage);   
this.closePackageModal()
this.closeStripeModal()
  
}


//PAYPAL PAYMENT 

paypalClick(){
 this.closePackageModal()
 this.showLoadingModal=true
 this.paymentService.paypal_create_billing_plan(this.form3,this.selectedPackage)
}


// CONTINUE PAYMENT FOR TESTING  OF 0$

continuePaymentButton(){
  this.paymentService.testing(this.form3,this.selectedPackage);
}



}