import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  friend_id: any;
  user_id: any;
  friend: any = {};
isLoading:boolean=false
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
  ) {}

  sendMessage(){
    this.router.navigate(['/messages']);
  }

  ngOnInit(): void {
    this.isLoading=true
    this.route.paramMap.pipe(
      switchMap(paramMap => {
        this.friend_id = paramMap.get('id');
        this.user_id = localStorage.getItem('user_id');

        // Fetch data based on the new parameters
        return this.apiService.getUserData(this.user_id, this.friend_id);
      })
    )
    .subscribe(
      (response) => {
        if (response.status == 'Success') {
          this.friend = response;
          this.isLoading=false
        } else {
          alert("No data found!");
          this.isLoading=false
        }
      },
      (error) => {
        alert("Error fetching user data with error: " + error);
        this.isLoading=false
      }
    );
  }


  sendRequest(){
    const f_id=parseInt(this.friend_id, 10);
    this.apiService.sendRequest(this.user_id,f_id).subscribe(
      (response)=>{
        if(response.status='Success'){
          this.router.navigate(['/cards']);
        }
        else{
          alert("failed to send request")
        }
      },(error)=>{
        alert("failed to send request with error: "+ error)
      }
    )
  }
}
