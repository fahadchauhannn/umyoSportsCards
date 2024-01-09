import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { RegisterUserDataService} from '../../../register-user-data.service'
@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {
  positionType: any = []
  businessType: any = []
  sportType: any = []
  ageType: any = []
user = {
  state:'',
    user_id: 0,
    firstname: '',
    lastname: '',
    email: '',
    DOB: null,
    city: null,
    country: null,
    company: null,
    job_title: null,
    website: null,
    facebook_url: null,
    twitter_url: null,
    linkedin_url: null,
    youtube_url: null,
    profile_image: null,
    gender: null,
    business_type:'',
    sport_type:'',
    position:'',
    age_type:''
  }; 
  isLoading: boolean = false;
  countries: any[] = [];
  countryAltSpellingsMap: { [shortForm: string]: string } = {}; // Map sh
  constructor(
    private registerUserDataService:RegisterUserDataService,
    private apiService: ApiService
  ) {
    this.getBusniessType()

    this.getAgeType()
    this.getSportType()
    

  }
  onSportTypeChange() {

    const selectedSport = this.user.sport_type
    console.log("selected sports type" , selectedSport);
    if (selectedSport) {
      console.log('inside');
      this.getPositionType(selectedSport);
    }
  }
  getBusniessType() {
    this.apiService.getBusinessType().subscribe(
      (response) =>
        this.businessType = response.Categories
    )
  }
  getSportType() {
    this.apiService.getSportType().subscribe(
      (response) =>
        this.sportType = response.types
    )
  }
  getAgeType() {
    this.apiService.getAgeType().subscribe(
      (response) =>
        this.ageType = response.types
    )
  }
  getPositionType(sport: any) {
    this.apiService.getPositionType(sport).subscribe(
      (response) => {
        this.positionType = response.types;
      }
    );
  }
  ngOnInit(): void {

    
    this.isLoading = true;
    
     const id = localStorage.getItem('user_id')
     this.user.user_id  = parseInt(id, 10);
    if (id !== null || '') {
      
      
      this.apiService.getUserById(this.user.user_id).subscribe(
        (response) => {
          this.isLoading = false;
          const updatedUser = {
            
            firstname: response.Users.firstname,
            lastname: response.Users.lastname,
            email: response.Users.email,
            DOB:response.Users.DOB,
            city:response.Users.city,
            country:response.Users.country,
            company:response.Users.company,
            job_title:response.Users.job_title,
            website:response.Users.website,
            facebook_url:response.Users.facebook_url,
            twitter_url:response.Users.twitter_url,
            linkedin_url:response.Users.linkedin_url,
            youtube_url:response.Users.youtube_url,
            profile_image:response.Users.profile,
            gender:response.Users.gender,
            business_type:response.Users.business_type,
            sport_type:response.Users.sport_type,
            position:response.Users.position,
            age_type:response.Users.age_type,
            state:response.Users.state,

          };
          this.user = { ...this.user, ...updatedUser };
          if(this.user.sport_type!=''){
            this.getPositionType(this.user.sport_type)
          }
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    } else {
     
    }
  }
  

  saveChanges() {
    this.isLoading=true
    this.apiService.updateUser(this.user).subscribe(
      (response) => {
        console.log('User data updated successfully:', response);
        this.isLoading=false
      },
      (error) => {
        
        console.error('Error updating user data:', error);
      }
    );
  }
}