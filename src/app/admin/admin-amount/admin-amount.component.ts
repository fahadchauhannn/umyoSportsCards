import { Component, OnInit } from '@angular/core';
import { Amount } from '../../model.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-admin-amount',
  templateUrl: './admin-amount.component.html',
  styleUrls: ['./admin-amount.component.css']
})
export class AdminAmountComponent implements OnInit {
  amount: Amount[] = [];
  isLoading: boolean = false;
  bearerToken: string | null = localStorage.getItem("admin_access_token");

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchReferals();
  }

  fetchReferals(): void {
    this.isLoading = true;
    this.apiService.getReferals(this.bearerToken).subscribe(
      (response) => {
        this.isLoading = false;
        this.amount = response.listOfReferals;
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.isLoading = false;
      }
    );
  }

  changeStatus(amtId: any): void {
    this.isLoading = true;
    this.apiService.changeStatus(amtId).subscribe(
      (response) => {
        if (response.status === "Success") {
          this.fetchReferals();
        } else {
          alert("Failed to change the status");
          this.isLoading = false;
        }
      },
      (error) => {
        console.error('Error changing status:', error);
        this.isLoading = false;
      }
    );
  }
}
