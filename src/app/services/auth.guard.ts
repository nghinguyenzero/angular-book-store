// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements  {

// }

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor( public router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
      if (localStorage.getItem('user')) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
  }
}
