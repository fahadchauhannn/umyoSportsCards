import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../model.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  
  user = {
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
  }; // Initialize an empty user object
  isLoading: boolean = false;
  countries: any[] = [];
  countryAltSpellingsMap: { [shortForm: string]: string } = {}; // Map sh
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const user_id = +idParam;
      this.apiService.getUserById(user_id).subscribe(
        (response) => {
          this.isLoading = false;
          const updatedUser = {
            user_id: response.Users.id,
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
            gender:response.Users.gender
          };
          this.user = { ...this.user, ...updatedUser }; // Merge the updated properties
          // Fetch the list of countries
          this.apiService.getCountries().subscribe((countries) => {
            this.countries = countries;
            // Check if user's country matches any alt spelling, and replace if necessary
            if (this.user.country !== null) {
              const matchingCountry = countries.find((country) =>
                country.altSpellings.includes(this.user.country)
              );
              if (matchingCountry) {
                this.user.country = matchingCountry.name.common;
              }
            }
          });
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    } else {
      // Handle the case when no user ID is provided
    }
  }
  

  saveChanges() {
    // Send a POST request to save changes to the user data
    this.apiService.updateUser(this.user).subscribe(
      (response) => {
        console.log('User data updated successfully:', response);
        // Redirect to the user list or perform any necessary actions
      },
      (error) => {
        console.error('Error updating user data:', error);
      }
    );
  }
}
