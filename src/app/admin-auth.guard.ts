// src/app/guards/admin-auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAdmin = localStorage.getItem('user_type') === 'admin';

    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }
}
