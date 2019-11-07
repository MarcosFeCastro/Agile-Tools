import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LocalUserGuard implements CanActivate {

  constructor( private auth: AuthService, private router: Router ) { }

  canActivate(): Promise<boolean> {
    return new Promise( resolve => {
      let user = this.auth.getLocalUser();
      if (!user) {
        this.router.navigate(['']);
      }
      resolve( user ? true : false );
    });
  }
  
}
