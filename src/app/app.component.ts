import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  securityCheck:boolean=false

  ngOnInit(): void {
    // Send an AJAX request to check domain validity
    this.http.get<any>('https://flyeats.co.uk/verify-domain.php').subscribe(
      (response) => {
        if (response.status === 'true') {
          this.securityCheck=true
          // Domain is valid, continue with the website
          console.log('Domain check passed');
        } else {
          // Domain is not valid, return blank page
          this.securityCheck=false

        }
      },
      (error) => {
        this.securityCheck=false

      }
    );
  }
}
