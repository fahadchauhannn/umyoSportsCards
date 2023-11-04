import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  mobileMenuOpen = false;

  
  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
