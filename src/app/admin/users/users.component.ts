import { Component, OnInit } from '@angular/core';
import { User } from '../../model.model';
import { ApiService } from '../../api.service';
import { ToastrService } from 'ngx-toastr';

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
    const bearerToken = 'YOUR_BEARER_TOKEN'; 
    this.isLoading=true
    this.apiService.getAllUsers(bearerToken).subscribe(
      (response) => {
        this.isLoading=false
        this.users = response.Users; 
        console.log(this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteUser(userId: number) {
    this.isLoading = true;
    this.apiService.deleteUser(userId).subscribe(
      (response) => {
        this.refreshUserList(); 
      },
      (error) => {
    
        
      }
    );
    
  }

  
  refreshUserList() {
    this.isLoading=true;
    const bearerToken = 'YOUR_BEARER_TOKEN'; 
    this.apiService.getAllUsers(bearerToken).subscribe(
      (response) => {
        this.users = response.Users; 
        this.isLoading=false
      },
      (error) => {
       
      }
    );
  }
}