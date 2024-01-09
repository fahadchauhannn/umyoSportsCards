import { Subject, fromEvent } from 'rxjs';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { ApiService } from '../../api.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  query: string = '';
  menu: boolean = false;
  user_id: string | null = localStorage.getItem('user_id');
  searchResults: any[] = [];
  private searchSubject = new Subject<string>();

  constructor(private el: ElementRef, private renderer: Renderer2, private apiService: ApiService,private router:Router) {}

  logout(){
    localStorage.clear()
    this.router.navigate(['/']);
  }
  toggleMenu() {
    const navbarContent = this.el.nativeElement.querySelector('#navbar-content');
    this.menu = !this.menu;

    if (this.menu) {
      this.renderer.addClass(navbarContent, 'show');
      console.log('show');
    } else {
      this.renderer.removeClass(navbarContent, 'show');
      console.log('hide');
    }
  }
  closeSearch(){
    this.query=''
  }

  searchUsers() {
    console.log("calling");
    if (this.query.trim() === '') {
      this.searchResults = []; // Clear results if the query is empty
      return;
    }
  
    this.apiService.searchUser(this.user_id, this.query).subscribe(
      (response: any) => {
        if (response.status == 'Success') {
          this.searchResults = response.Users;
          console.log(this.searchResults);
        }
      },
      (error) => {
        console.error('Error searching for users', error);
      }
    );
  }
 
}
