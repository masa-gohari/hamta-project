
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Principal } from "../models/principal.model";

@Injectable()
export class IdentityService {

  private principal: Principal;
  private authenticationState = new Subject<Principal>();
  constructor() {
    this.principal = new Principal();
  }

  setIdentity(userIdentity: string, roles: Array<number>) {
    this.principal.isAuthenticated = true;
    this.principal.userFullName = userIdentity;
    this.principal.authorities = roles;
    this.authenticationState.next(this.principal);
  }
  isValidIdentity() {
    if (this.principal != undefined && this.principal.isAuthenticated == true)
      return true;
    else
      return false;
  }

  getUserName() {
    return this.principal.userFullName;
  }

  hasPermission(permmission: number): boolean {
    if (this.principal.authorities.indexOf(permmission) !== -1)
      return true;
    else
      return false;
  }

  logout() {
    localStorage.clear();
    this.principal.isAuthenticated = false;
    this.principal.userFullName = "";
    this.authenticationState.next(this.principal);
  }
  
  getAuthenticationState(): Observable<Principal> {
    return this.authenticationState.asObservable();
  }
}
