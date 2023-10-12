import { Component, OnInit } from '@angular/core';
import { Pkg } from '../../model.model';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit{
  packages: Pkg[] = [];
  isLoading:boolean=false;
  constructor(private apiService: ApiService,private router: Router) {}

  ngOnInit(): void {
    const bearerToken = 'YOUR_BEARER_TOKEN';
    this.isLoading=true
    this.apiService.getPackages(bearerToken).subscribe(
      (response) => {
        this.isLoading=false
        this.packages = response.Package;
        
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  deletePackage(packageId: number) {
    this.isLoading = true;
    this.apiService.deletePackage(packageId).subscribe(
      (response) => {
        this.refreshUserList()
      },
      (error) => {
      
        
      }
    );
    
  }

  addPackage(){
    this.router.navigate(['admin/add-package']);
  }

  refreshUserList() {
    this.isLoading=true;
    const bearerToken = 'YOUR_BEARER_TOKEN'; 
    this.apiService.getPackages(bearerToken).subscribe(
      (response) => {
        this.packages = response.Package; 
        this.isLoading=false
      },
      (error) => {
       
      }
    );
  }
}