import { Component } from '@angular/core';
import { ApiService } from '../../api.service'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private apiService: ApiService) {}

  updatePassword() {
    
    const oldPassword = (<HTMLInputElement>document.getElementById('oldPassword')).value;
    const newPassword = (<HTMLInputElement>document.getElementById('newPassword')).value;
    const email = localStorage.getItem('admin_email');

    
    if (!oldPassword || !newPassword || !email) {
      console.log(oldPassword);
      console.log(newPassword);
      console.log(email);
      alert('Please fill in all the fields.');
      return;
    }

    
    const payload = {
      old_password: oldPassword,
      new_password: newPassword,
      email: email
    };
    const bearerToken = localStorage.getItem("admin_access_token")

    
    if(oldPassword && newPassword){
      this.apiService.updateAdminPassword(bearerToken,payload)
      .subscribe(response => {
        if(response.status=='Success'){
          alert("password updated successfully")
          console.log('Password updated successfully', response);
        }
        if(response.status=='Failed'){
          alert(response.message)
        }
        
      }, error => {
        alert("Failed to update password with error: "+error.message)
        console.error('Error updating password', error);
      });
    }
    else{
      alert("please enter required feilds")
    }
   
  }
}
