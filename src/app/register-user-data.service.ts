import { Injectable } from '@angular/core';
import { ApiService } from './api.service'
import {User,registerResponse} from './models/register-response.model'
@Injectable({
  providedIn: 'root'
})
export class RegisterUserDataService {

  constructor(private apiService: ApiService) { }
// userData:any={}


  // registerUser(userData:any){
  //   this.apiService.registerUser(userData).subscribe(
  //     (response: registerResponse)=>{

  //       localStorage.setItem('access_token', response.access_token);
  //       this.userData=response
  //       console.log(response);
  //     }
  //   )
  // }

  // getUserId(){
  //   return this.userData.Users.id
  // }
}
