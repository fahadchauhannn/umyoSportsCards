import { Component } from '@angular/core';
import { ApiService } from '../api.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent{
 
  

  constructor(private apiService: ApiService,private fb: FormBuilder,private router: Router,) {
    this.form = this.fb.group({
      email: ['', Validators.required]
    });
  }
  form: FormGroup;  
  submit(){ 
    
    this.apiService.resetPassword(this.form.get('email').value).subscribe(
    (response:any)=>{
      if(response.status=='Success'){
            console.log("Successfully reset password");
            alert("Password Sent to Mail. Use that to login to your account.")
            this.router.navigate(['']);
      }
      else{
        alert("Email Address Not Found in Database.")
      }

    },(error)=>{
      alert("Error Occured")
    }
    )
  }

  login(){
    this.router.navigate(['']);
  }
}




