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

  ngOnInit(): void {
    // Send an AJAX request to check domain validity
    this.http.get<any>('https://yourserver.com/check-domain.php').subscribe(
      (response) => {
        if (response.status === 'true') {
          // Domain is valid, continue with the website
          console.log('Domain check passed');
        } else {
          // Domain is not valid, return blank page
          this.router.navigate(['/blank']); // Make sure you have a 'blank' route set up in your app
        }
      },
      (error) => {
        // Handle error if needed (e.g., server is down)
        console.error('Error checking domain', error);
        this.router.navigate(['/blank']);
      }
    );
  }
}
