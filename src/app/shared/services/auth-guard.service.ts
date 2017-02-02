import { Injectable } from '@angular/core';
import {CanActivateChild, Router, CanActivate} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivateChild, CanActivate{

  constructor(private auth: AuthService, private router: Router) {}

  canActivateChild() {
    debugger;
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  canActivate() {
    debugger;
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }



}
// { path: '', component: PrivateMainContentComponent, canActivateChild: [AuthGuard],
//   children: [
//   ...ReportsRoutes]
//
