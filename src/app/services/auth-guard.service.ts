import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { IdentityService } from './identity.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private identityService: IdentityService, public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    if (!this.identityService.isValidIdentity()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}