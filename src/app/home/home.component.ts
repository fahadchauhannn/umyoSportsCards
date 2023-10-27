import { Component, OnInit , AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import {ApiService} from '../api.service'
import { FormBuilder, FormGroup, Validators,AbstractControl  } from '@angular/forms';
import { Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import { StripeCardNumberComponent, StripeService } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
  PaymentIntent,
} from '@stripe/stripe-js';

declare var paypal: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('modal') modal: ElementRef | undefined; // This is for the Bootstrap modal reference

  public elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };


  paymentForm: FormGroup = this.fb.group({
    cardNumber: ['', [Validators.required]],
    expiryDate: ['', [Validators.required]],
    cvc: ['', [Validators.required]]
});


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
    // if (this.paymentForm.valid) {
      this.createPaymentIntent(this.selectedPackage.net_price ? this.selectedPackage.net_price : this.selectedPackage.price)
        .pipe(
          switchMap((pi:any) =>
            this.stripeService.confirmCardPayment(pi.client_secret, {
              payment_method: {
                card: this.card.element,
                billing_details: {
                  name: this.form3.get('registerFirstName').value,
                },
              },
            })
          )
        )
        .subscribe((result) => {
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
            }
          }
        });
    // } else {
    //   console.log(this.paymentForm);
    // }
  }

  createPaymentIntent(amount: number): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `pk_test_51O5YCYFsXQwPd2tbJm8xT224tG7OoCXWGyigDqVGZ2DeNsiWxhSDfJNiBbfq508cDU15nQOctVTijlbUcJvVqleO00OTWN3YAb/create-payment-intent`,
      { amount }
    );
  }

  
packages: any[] = [];
  slides1: any[] = []; 
  slides2: any[] = []; 
  email:string=''
  password:string=''
  slideConfig1: any;
  slideConfig2: any;
  form: FormGroup;
  positionType:any=[]
  businessType:any=[]
  sportType:any=[]
  ageType:any=[]
  selectedSport:any
  form2: FormGroup;
  submitButtonClicked = false;
  form3:FormGroup
  selectedPackage: any=null;


  selectPackage(selectedPackage: any) {
    this.selectedPackage = selectedPackage;
  }
  
 

  closeModal(){
    // const modal = document.getElementById('exampleModalCenter');
    //   this.renderer.removeClass(modal, 'show');

  }
   emailMatchValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
    const email = control.get('registerEmail');
    const confirmEmail = control.get('registerConfirmEmail');
  
    // Return an error if the emails don't match
    if (email?.value !== confirmEmail?.value) {
      return { emailMismatch: true };
    }
  
    return null;
  };
  submitForm() {
    
    if (!this.form3.valid) {
      
      this.submitButtonClicked = true;
      console.log('not valid clicked');
    }
    if (this.form3.valid) {
      // const modal = document.getElementById('exampleModalCenter');
      // this.renderer.addClass(modal, 'show');
      // this.renderer.setStyle(modal, 'display', 'block');
      
      
      this.submitButtonClicked = false;
    }

    console.log("clicking");
  }


  getBusniessType(){
    this.apiService.getBusinessType().subscribe(
      (response)=>
      this.businessType=response.Categories
    )
  }
  getSportType(){
    this.apiService.getSportType().subscribe(
      (response)=>
      this.sportType=response.types
    )
  }
  getAgeType(){
    this.apiService.getAgeType().subscribe(
      (response)=>
      this.ageType=response.types
    )
  }
  getPositionType(sport: any) {
  this.apiService.getPositionType(sport).subscribe(
    (response) => {
      this.positionType = response.types;
    }
  );
}



  login() {
    const emailControl = this.form.get('email');
    const passwordControl = this.form.get('password');
  
    if (emailControl && passwordControl) {
      if (this.form.valid) {
        const email = emailControl.value;
        const password = passwordControl.value;
        
        this.apiService.publicLogin(email, 0, password).subscribe((response) => {
          console.log(response);
        });
      } else {
        
      }
    }
  }
  register() {
    const firstName = this.form3.get('registerFirstName');
    const lastName = this.form3.get('registerLastName');
    const email = this.form3.get('registerEmail');
    const password = this.form3.get('registerPassword');
    const confirmEmail = this.form3.get('registerConfirmEmail');
    const phone = this.form3.get('registerPhone');
    const country = this.form3.get('registerCountry');
    const businessType = this.form3.get('registerBusinessType');
    const ageType = this.form3.get('registerAgeType');
    const sportType = this.form3.get('registerSportType');
    const positionType = this.form3.get('registerPositionType');
    const stateType = this.form3.get('registerStateType');
    const referralCode = this.form3.get('registerReferralCode');
  
    if (firstName && lastName && email && password && confirmEmail && phone && country) {
      if (this.form3.valid) {
        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const emailValue = email.value;
        const passwordValue = password.value;
        const confirmEmailValue = confirmEmail.value;
        const phoneValue = phone.value;
        const countryValue = country.value;
        const businessTypeValue = businessType?.value;
        const ageTypeValue = ageType?.value;
        const sportTypeValue = sportType?.value;
        const positionTypeValue = positionType?.value;
        const stateTypeValue = stateType?.value;
        const referralCodeValue = referralCode?.value;
  
        
        // this.apiService.registerUser({
        //   firstName: firstNameValue,
        //   lastName: lastNameValue,
        //   email: emailValue,
        //   password: passwordValue,
        //   confirmEmail: confirmEmailValue,
        //   phone: phoneValue,
        //   country: countryValue,
        //   businessType: businessTypeValue,
        //   ageType: ageTypeValue,
        //   sportType: sportTypeValue,
        //   positionType: positionTypeValue,
        //   stateType: stateTypeValue,
        //   referralCode: referralCodeValue,
        // }).subscribe((response) => {
        
        //   console.log(response);
        // }, (error) => {
        
        //   console.error(error);
        // });
      } else {
        
        console.log('Invalid registration form');
      }
    }
  }
  


  constructor(private apiService: ApiService,private fb: FormBuilder,private renderer: Renderer2, private http: HttpClient,
    private stripeService: StripeService) {



      // form is login form 
      // form2 is search of cards form 
      // from 3 is registration form 
      
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
    });
    this.form3 = this.fb.group({
      registerFirstName: ['', Validators.required],
      registerLastName: ['', Validators.required],
      registerEmail: ['', [Validators.required, Validators.email]],
      registerConfirmEmail: ['', [Validators.required, Validators.email]],
      registerPassword: ['', [Validators.required, Validators.minLength(6)]],
      
      registerPhone: ['', Validators.required],
      registerCountry: ['', Validators.required],
      registerBusinessType: ['', Validators.required],
      registerAgeType: ['', Validators.required],
      registerSportType: ['', Validators.required],
      registerPositionType: ['', Validators.required],
      registerStateType: ['', Validators.required],
      registerReferralCode: [''], // Not required
    }, { validators: this.emailMatchValidator })


    this.getBusniessType()
    
    this.getAgeType()
    this.getSportType()
    this.form2.patchValue({
      selectedBusinessType: 'Select Business Type',
      selectedAgeType: 'Select Age Type',
      selectedSportType: 'Select Sport Type',
      selectedPositionType: 'Select Position Type',
      selectedStateType: 'Select State Type',
    });
    
    
  
    this.apiService.getSignUpPackages(null).subscribe(
      (response) => {  
        this.packages=response.Package
        console.log(response.Package);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
    this.slideConfig1 = {
      dots: false,
      infinite: true,
      autoplay: true,       
      autoplaySpeed: 1,    
      speed: 5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      slidesToShow: 5,       
      slidesToScroll: 1,
      fade: false,
      rtl: false,
      cssEase: 'linear'
    };

    this.slideConfig2 = {
      dots: false,
      infinite: true,
      autoplay: true,      
      autoplaySpeed: 1,    
      speed: 5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      slidesToShow: 5,     
      slidesToScroll: 1,
      fade: false,
      rtl: true,
      cssEase: 'linear'
    };

this.slides1 = [
  { img: 'assets/img/logo2/blackwall.png' },
  { img: 'assets/img/logo2/events.png' },
  { img: 'assets/img/logo2/logo2.png' },
  { img: 'assets/img/logo2/logo3.png' },
  { img: 'assets/img/logo2/logo4.png' },
  { img: 'assets/img/logo2/logo5.png' },
  { img: 'assets/img/logo2/logo6.png' },
  { img: 'assets/img/logo2/logo7.png' },
  { img: 'assets/img/logo2/logo8.png' },
  { img: 'assets/img/logo2/logo9.png' },
  { img: 'assets/img/logo2/logo10.png' },
 
];


this.slides2 = [
  { img: 'assets/img/logo2/logo11.png' },
  { img: 'assets/img/logo2/logo12.png' },
  { img: 'assets/img/logo2/logo13.png' },
  { img: 'assets/img/logo2/logo14.png' },
  { img: 'assets/img/logo2/logo15.png' },
  { img: 'assets/img/logo2/logo16.png' },
  { img: 'assets/img/logo2/pledge.png' },
  { img: 'assets/img/logo2/logo9.png' },
  { img: 'assets/img/logo2/umyo_market.png' },
  { img: 'assets/img/logo2/logo8.png' },
  { img: 'assets/img/logo2/umyodate.png' },

];



  
  }

  onSportTypeChange() {

    const selectedSport = this.form2.get('selectedSportType')?.value;
    if (selectedSport) {
      console.log('inside');
      this.getPositionType(selectedSport);
    }
  }
  onRegisterSportTypeChange() {

    const selectedSport = this.form3.get('registerSportType')?.value;
    if (selectedSport) {
      this.getPositionType(selectedSport);
    }
  }

  searchSports() {
    const formData = this.form2.value;
    

  
  }


  FUNDING_SOURCES = [
    paypal.FUNDING.PAYPAL,
    
  ];


  payWithPayPal(selectedPackage: any) {
    this.selectedPackage = selectedPackage;
  
  }
  
  ngAfterViewInit() {
    console.log("register counry value",this.form3.get('registerCountry')?.value)
    const containerId = `paypal-button-container`;

    this.FUNDING_SOURCES.forEach(fundingSource => {
      const button = paypal.Buttons({
        fundingSource: fundingSource,
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: this.selectedPackage.net_price ?  this.selectedPackage.net_price : this.selectedPackage.price,
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          // Add your logic for when the payment is approved
        },
      });

      if (button.isEligible()) {
        button.render(`#${containerId}`);
      }
    });
  }

  

  

}