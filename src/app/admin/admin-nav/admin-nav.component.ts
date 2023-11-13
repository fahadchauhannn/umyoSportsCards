import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  constructor(private router:Router){}
  mobileMenuOpen = false;
logout(){
  localStorage.clear()
  this.router.navigate(['/admin']);
}
  
  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
