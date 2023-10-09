import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  mobileMenuOpen = false;

  // Toggle the mobile menu
  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
