import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'jquery';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private apiService:ApiService,private router:Router) {
    const user_type= localStorage.getItem('user_type')
    const admin_access_token= localStorage.getItem('admin_access_token')
    const admin_id=localStorage.getItem('admin_id')

    if (user_type !== null && user_type !== '' && admin_access_token !== null && admin_access_token !== '' && admin_id !== null && admin_id !== '') {
      this.router.navigate(['/admin/dashboard']);
    }
    

    
  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      email:  ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
  }

  login(){
    if (this.form.valid) {
      // Form is valid, you can send the request to change the password here.
      
      const email = this.form.value.email;
      const password = this.form.value.password;







      this.apiService.adminLogin(email, password).subscribe(
        (response: any) => {
          if (response.status === 200 && response.access_token !== '') {
            localStorage.setItem('user_type', response.admin.user_type);
            localStorage.setItem('admin_email', email);
            localStorage.setItem('admin_access_token', response.access_token);
            localStorage.setItem('admin_id', response.admin.id);
            this.router.navigate(['/admin/dashboard']);
          } else {
            // Handle unauthorized or invalid login
            alert("Login failed");
            this.form.patchValue({
              email: '',
              password: '',
            });
          }
        },
        (error: any) => {
          
          alert("Login failed with error: " + error.status + ": " +error.statusText);
          this.form.patchValue({
            email: '',
            password: '',
          });
        }
      );
      
    }
}
}
