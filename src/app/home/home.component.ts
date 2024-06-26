import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
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
import { DropdownService } from './../dropdown.service';
declare var $: any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  

  showLoginTab: boolean=true;
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


  specialityType:any
  location:any
  state:any
  race:any
  talentType:any
  gender:any
  


  slides1: any[] = [];
  slides2: any[] = [];
  slideConfig1: any;
  slideConfig2: any;
  slideConfig3: any;
  slideConfig4: any;
  slideConfig5: any;
  slideConfig6: any;
  email: string = ''
  password: string = ''
  form: FormGroup;
  positionType: any = []
  
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
  paypalTitleMessage:any;
  paypalMessage:any;
  
  ngOnInit(): void {

    this.dropdownService.getDropdownOptions().subscribe(data => {
      this.specialityType = data.specialityType;
      this.talentType = data.talentType;
      this.location = data.location;
      this.state = data.state;
      this.gender = data.gender;
      this.race = data.race;
    });


    this.route.queryParams.subscribe(params => {
      const referralId = params['referralId'] || "";
       
      this.form3.get('registerReferralCode')?.setValue(referralId); // Set the referral ID to the form control
    });
   
  
    const videoPath = 'assets/video.mp4';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
    this.paymentService.loadingStatus.subscribe((status: boolean) => {
      this.showLoadingModal = status;
    });
    



    
  }
  
  ngAfterViewInit(): void {
    $('.moreless-button-he').click(function() {
      $('.moretext-he').slideToggle();
      if ($('.moreless-button-he').text() == "Read more") {
        $(this).text("Read less")
      } else {
        $(this).text("Read more")
      }
    });
        $('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
        $('.moreless-button15').click(function() {
          event.preventDefault();
    $('.moretext15').slideToggle();
    if ($('.moreless-button15').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button1').click(function() {
          event.preventDefault();
    $('.moretext1').slideToggle();
    if ($('.moreless-button1').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button2').click(function() {
          event.preventDefault();
    $('.moretext2').slideToggle();
    if ($('.moreless-button2').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
        $('.moreless-button3').click(function() {
          event.preventDefault();
    $('.moretext3').slideToggle();
    if ($('.moreless-button3').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
        $('.moreless-button4').click(function() {
          event.preventDefault();
    $('.moretext4').slideToggle();
    if ($('.moreless-button4').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
     
        $('.moreless-button5').click(function() {
          event.preventDefault();
    $('.moretext5').slideToggle();
    if ($('.moreless-button5').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
   
        $('.moreless-button6').click(function() {
          event.preventDefault();
    $('.moretext6').slideToggle();
    if ($('.moreless-button6').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
    
        $('.moreless-button7').click(function() {
          event.preventDefault();
    $('.moretext7').slideToggle();
    if ($('.moreless-button7').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
    
        $('.moreless-button8').click(function() {
          event.preventDefault();
    $('.moretext8').slideToggle();
    if ($('.moreless-button8').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
     
        $('.moreless-button9').click(function() {
          event.preventDefault();
    $('.moretext9').slideToggle();
    if ($('.moreless-button9').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
        $('.moreless-button10').click(function() {
          event.preventDefault();
    $('.moretext10').slideToggle();
    if ($('.moreless-button10').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
     
        $('.moreless-button11').click(function() {
          event.preventDefault();
    $('.moretext11').slideToggle();
    if ($('.moreless-button11').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
        $('.moreless-button12').click(function() {
          event.preventDefault();
    $('.moretext12').slideToggle();
    if ($('.moreless-button12').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
      
        $('.moreless-button13').click(function() {
          event.preventDefault();
    $('.moretext13').slideToggle();
    if ($('.moreless-button13').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
     
        $('.moreless-button14').click(function() {
          event.preventDefault();
    $('.moretext14').slideToggle();
    if ($('.moreless-button14').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });






        $('.moreless-button16').click(function() {
          event.preventDefault();
    $('.moretext16').slideToggle();
    if ($('.moreless-button16').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button17').click(function() {
          event.preventDefault();
    $('.moretext17').slideToggle();
    if ($('.moreless-button17').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button18').click(function() {
          event.preventDefault();
    $('.moretext18').slideToggle();
    if ($('.moreless-button18').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button19').click(function() {
          event.preventDefault();
    $('.moretext19').slideToggle();
    if ($('.moreless-button19').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button20').click(function() {
          event.preventDefault();
    $('.moretext20').slideToggle();
    if ($('.moreless-button20').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button21').click(function() {
          event.preventDefault();
    $('.moretext21').slideToggle();
    if ($('.moreless-button21').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button22').click(function() {
          event.preventDefault();
    $('.moretext22').slideToggle();
    if ($('.moreless-button22').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button23').click(function() {
          event.preventDefault();
    $('.moretext23').slideToggle();
    if ($('.moreless-button23').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button24').click(function() {
          event.preventDefault();
    $('.moretext24').slideToggle();
    if ($('.moreless-button24').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button25').click(function() {
          event.preventDefault();
    $('.moretext25').slideToggle();
    if ($('.moreless-button25').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button26').click(function() {
          event.preventDefault();
    $('.moretext26').slideToggle();
    if ($('.moreless-button26').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
        $('.moreless-button27').click(function() {
          event.preventDefault();
    $('.moretext27').slideToggle();
    if ($('.moreless-button27').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
  
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
    
          this.showLoginTab = !this.showLoginTab;
    }
    
    // toggle read more buttons 
    toggleMoreText(): void {
      this.isMoreTextVisible = !this.isMoreTextVisible;
    }
    isMoreTextVisible2 = false;
    isMoreTextVisible3 = false;
    toggleMoreText2(): void {
      this.isMoreTextVisible2 = !this.isMoreTextVisible2;
    }
    toggleMoreText3(): void {
      this.isMoreTextVisible3 = !this.isMoreTextVisible3;
    }
  
  
  
    // search cards 
    searchCards(){
     
       const payload={
        state : this.form2.get('selectedStateType').value,
       city : this.form2.get('selectedCity').value,
       type : this.form2.get('selectedType').value,
       talent : this.form2.get('selectedTalent').value,
       
       

      
       name : this.form2.get('selectedName').value,
       gender : this.form2.get('selectedGender').value,
       race : this.form2.get('selectedRace').value,
       
       }
      
      this.apiService.searchCard(payload).subscribe(
        (response)=>{
          this.cardsSearched=response.Cards
          console.log(response);
        }
      )
    }
    getPositionType(sport: any) {
      this.apiService.getPositionType(sport).subscribe(
        (response) => {
          this.positionType = response.types;
        }
      );
    }
    getAgeType() {
      this.apiService.getAgeType().subscribe(
        (response) =>
          this.ageType = response.types
      )
    }
    onSportTypeChange() {
  
      const selectedSport = this.form2.get('selectedSportType')?.value;
      if (selectedSport) {
        
        this.getPositionType(selectedSport);
      }
    }
    onRegisterSportTypeChange() {
  
      const selectedSport = this.form3.get('registerSportType')?.value;
      if (selectedSport) {
        this.getPositionType(selectedSport);
      }
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
  
    constructor(private apiService: ApiService, private fb: FormBuilder,  private http: HttpClient,private route: ActivatedRoute, private dropdownService: DropdownService,
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
          this.paypalTitleMessage="Payment Successful!"
   this.paypalMessage="Thank you for successfully completing your payment through PayPal. Your transaction has been processed, and it may take a few minutes for us to update your payment status on our end. We appreciate your patience. If you have any questions or concerns, please don't hesitate to contact us for assistance."
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
                alert("We're sorry, it seems that your payment through PayPal was not completed successfully. if you continue to experience difficulties, please contact us!")
                window.location.href='https://umyoentertainment.site/'
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
        
        selectedStateType: [''],
        selectedName: [''],
        selectedRace: [''],
        selectedLocation: [''],
        selectedGender: [''],
        selectedCity: [''],
        selectedType:[''],
        selectedTalent:[''],
        
        
     

        
      });
      this.form3 = this.fb.group({
        registerFirstName: ['', Validators.required],
        registerLastName: ['', Validators.required],
        registerEmail: ['', [Validators.required, Validators.email]],
        registerConfirmEmail: ['', [Validators.required, Validators.email]],
        registerPassword: ['', [Validators.required, Validators.minLength(6)]],
        registerPhone: ['', Validators.required],
        registerCityType: ['', Validators.required],
        registerRaceType: ['', Validators.required],
        registerGenderType: ['', Validators.required],
        registerLocation: ['', Validators.required],
        registerType: ['', Validators.required],
  

        registerStateType: ['', Validators.required],
        registerTalent: ['', Validators.required],
      
        


        
        
        

        
        
        
        registerReferralCode: [''], // Not required
      }, { validators: this.emailMatchValidator })
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
  
      this.slideConfig1 = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        rtl: false,
        cssEase: 'linear'
      };
  
  
      this.slideConfig2 = {
        arrows:false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow:1,
        slidesToScroll: 1,
        fade: false,
        rtl: true,
        cssEase: 'linear'
      };
      this.slideConfig3 = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        rtl: false,
        cssEase: 'linear'
      };
  
  
      this.slideConfig4 = {
        arrows:false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow:4,
        slidesToScroll: 1,
        fade: false,
        rtl: true,
        cssEase: 'linear'
      };
      this.slideConfig5 = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        fade: false,
        rtl: false,
        cssEase: 'linear'
      };
  
  
      this.slideConfig6 = {
        arrows:false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow:2,
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
    getSportType() {
      this.apiService.getSportType().subscribe(
        (response) =>
          this.sportType = response.types
      )
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
    if (this.paymentForm.valid) {
      this.paymentService.createPaymentIntent(this.paymentForm, this.form3, this.selectedPackage);
      this.closePackageModal();
      this.closeStripeModal();
      this.paypalTitleMessage = "Please Wait";
      this.paypalMessage = "Your Stripe payment is being processed. Your patience is appreciated.";
      this.showLoadingModal=true
    } else {
      // Display alert for each validation error
      if (this.paymentForm.get('cardNumber').hasError('required')) {
        alert('Please enter card number.');
      }
      if (this.paymentForm.get('cardNumber').hasError('invalidCardNumber')) {
        alert('Invalid card number. Please enter a 16-digit number without dashes - XXXXXXXXXXXXXXXX');
      }
      if (this.paymentForm.get('expiryDate').hasError('required')) {
        alert('Please enter expiry date.');
      }
      if (this.paymentForm.get('expiryDate').hasError('invalidExpiryDate')) {
        alert('Invalid expiry date. Please enter in MM/YY format. for example: 12/28');
      }
      if (this.paymentForm.get('expiryDate').hasError('expiredExpiryDate')) {
        alert('Card has already expired.');
      }
      if (this.paymentForm.get('cvc').hasError('required')) {
        alert('Please enter CVC.');
      }
      if (this.paymentForm.get('cvc').hasError('minlength') || this.paymentForm.get('cvc').hasError('maxlength')) {
        alert('Invalid CVC. Please enter a 3-digit number.');
      }
    }
  }
  
  
  //PAYPAL PAYMENT 
  
  paypalClick(){
   this.closePackageModal()
   this.paypalTitleMessage="Redirecting to PayPal"
   this.paypalMessage="You are now being redirected to the PayPal website to complete your transaction securely. Please wait a moment while we process your request. If you encounter any issues or have any questions, feel free to contact us for assistance."
   this.showLoadingModal=true
   this.paymentService.paypal_create_billing_plan(this.form3,this.selectedPackage)
  }
  
  
  // CONTINUE PAYMENT FOR TESTING  OF 0$
  
  continuePaymentButton(){
    this.paymentService.testing(this.form3,this.selectedPackage);
  }
  
  
  
  }