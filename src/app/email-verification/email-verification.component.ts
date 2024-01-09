import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service'; // Import your PaymentService
import { ApiService } from '../api.service'
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { VerifyEmail } from '../models/verify-email-response.model'
import { Router } from '@angular/router';
import {RegisterUserDataService} from '../register-user-data.service'

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {
 
  

  constructor(private paymentService: PaymentService,private apiService: ApiService,private RegisterUserDataService:RegisterUserDataService,private fb: FormBuilder,private router: Router,) {
    this.form = this.fb.group({
      verificationCode: ['', Validators.required]
    });
  }


  data:any={
    verification_code:'',
    email:''
  }
  form: FormGroup;

  
  ngOnInit() {
    this.data.email= localStorage.getItem('email');
  }
  
  submit(){
    
    this.data.verification_code=this.form.get('verificationCode').value
    
    this.apiService.verifyEmailCode(this.data).subscribe(
    (response:VerifyEmail)=>{
      if(response.status=='Success'){
            console.log("code verified");
            this.router.navigate(['/cards']);

      }
      else{
        alert("code not valid")
      }

    }
    )
  }
}




