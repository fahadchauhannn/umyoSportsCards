import { Component, OnInit } from '@angular/core';
import { User } from '../../model.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: any[] = [];
  isLoading:boolean=false;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    const bearerToken = 'YOUR_BEARER_TOKEN'; // Replace with your actual bearer token
    this.isLoading=true
    this.apiService.getAllUsers(bearerToken).subscribe(
      (response) => {
        this.isLoading=false
        this.users = response.Users; // Assuming the API response has a 'data' property containing the user data
        console.log(this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteUser(userId:number){
    
  }
}