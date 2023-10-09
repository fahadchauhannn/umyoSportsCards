import { Component, OnInit } from '@angular/core';
import { Pkg } from '../../model.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit{
  packages: Pkg[] = [];
  isLoading:boolean=false;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const bearerToken = 'YOUR_BEARER_TOKEN'; // Replace with your actual bearer token
    this.isLoading=true
    this.apiService.getPackages(bearerToken).subscribe(
      (response) => {
        this.isLoading=false
        this.packages = response.Package; // Assuming the API response has a 'data' property containing the user data
        
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  deletePackage(packageId: number) {
    
  }
}