import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      // Form is valid, you can send the request to change the password here.
      const email = localStorage.getItem('email');
      const oldPassword = this.changePasswordForm.value.oldPassword;
      const newPassword = this.changePasswordForm.value.newPassword;

      this.apiService.changePassword(email, oldPassword, newPassword).subscribe(response => {
        if(response.status=='Failed'){
          alert(response.message)
          this.changePasswordForm.patchValue({
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: ''
          });
        }
        else{
          alert("password changed sucessfully.")
        }
      });
    }
  }
  cancelSubscription(){
    const id = localStorage.getItem('user_id');
    const agrement_id = localStorage.getItem('agrement_id');
   const user_id= parseInt(id, 10);

    this.apiService.cancelSubscription(user_id,agrement_id).subscribe(
      (response)=>{
        if(response.status=='Failed'){
          alert(response.message)
        }
        else{
          alert('sucess')
        }
      }
    )

  }
}
