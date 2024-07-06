import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { RegisterUserDataService } from '../../../register-user-data.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {
  positionType: any = [];
  businessType: any = [];
  sportType: any = [];
  ageType: any = [];
  DOB:any
  gender:any
  user: any = {  };
  updateUser:any
  user_Id:any
  isLoading: boolean = false;
  countries: any[] = [];
  countryAltSpellingsMap: { [shortForm: string]: string } = {};

  constructor(
    private registerUserDataService: RegisterUserDataService,
    private apiService: ApiService
  ) {
    this.getBusinessType();
    this.getAgeType();
    this.getSportType();
  }

  onSportTypeChange() {
    const selectedSport = this.user.sport_type;
    if (selectedSport) {
      this.getPositionType(selectedSport);
    }
  }

  getBusinessType() {
    this.apiService.getBusinessType().subscribe(
      (response) => this.businessType = response.Categories
    );
  }

  getSportType() {
    this.apiService.getSportType().subscribe(
      (response) => this.sportType = response.types
    );
  }

  getAgeType() {
    this.apiService.getAgeType().subscribe(
      (response) => this.ageType = response.types
    );
  }

  getPositionType(sport: any) {
    this.apiService.getPositionType(sport).subscribe(
      (response) => this.positionType = response.types
    );
  }

  ngOnInit(): void {
    this.isLoading = true;

    const id = localStorage.getItem('user_id');
    

    if (id !== null || '') {
      this.apiService.getUserById( parseInt(id, 10)).subscribe(
        (response) => {
          this.isLoading = false;
this.gender=response.Users.gender
this.DOB=response.Users.DOB
this.user_Id=response.Users.id

          const excludeKeys = [
            'gender','DOB',
            'id','PackageData', 'totalReffers', 'packagePrice', 'limit', 'plan_id', 
            'subscription_id', 'sub_category', 'admin_text', 'balance_transaction',
            'balance_transaction_type', 'stripe_customer_id', 'stripe_subscription_id', 
            'plan_id', 'subscription_id', 'subscription_status', , 
            'package_id', 'refer_code', 'reffered_from', 'email_verified_at', 
            'created_at', 'updated_at', 'time_zone_country', 'time_zone_time', 
            'address', 'company', 'job_title', 'website', 'facebook_url', 
            'twitter_url', 'linkedin_url', 'youtube_url', 'profile_image', 
            'date_of_expiry', 'verification_code', 'is_verified', 'payment_id', 
            'payment_method', 'user_type', 'login','userId','userid'
          ];

          const filteredUser = Object.keys(response.Users)
            .filter(key => !excludeKeys.includes(key) && response.Users[key] !== null)
            .reduce((obj, key) => {
              obj[key] = response.Users[key];
              return obj;
            }, {});

          this.user = {  ...filteredUser };

          if (this.user.sport_type !== '') {
            this.getPositionType(this.user.sport_type);
          }

          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    }
  }

  saveChanges() { 
    this.isLoading = true;
    this.updateUser=this.user
    this.updateUser.DOB=this.DOB
    this.updateUser.gender=this.gender
    this.updateUser.user_id=this.user_Id
    this.apiService.updateUser(this.updateUser).subscribe(
      (response) => {
        console.log('User data updated successfully:', response);
        this.isLoading = false;
      },
      (error) => {
        console.error('Error updating user data:', error);
      }
    );
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  formatLabel(label: string): string {
    return label.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
}