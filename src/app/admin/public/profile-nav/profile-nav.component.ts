import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.css']
})
export class ProfileNavComponent {
  constructor(

    private apiService: ApiService
  ) {

    const id = localStorage.getItem('user_id')
     const user_id  = parseInt(id, 10);

     this.apiService.getUserById(user_id).subscribe(
      (response)=>{
        this.name=response.Users.firstname + " "+ response.Users.lastname
      }
     )

  }

  name:string=''
}
