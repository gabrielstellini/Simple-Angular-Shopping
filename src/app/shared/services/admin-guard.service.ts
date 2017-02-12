import { Injectable } from '@angular/core';
import {CanActivateChild, CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AdminGuardService implements CanActivateChild, CanActivate{

  constructor(private auth: AuthService, private router: Router) {}

  canActivateChild() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    else return this.auth.isAdmin()
  }

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    else return this.auth.isAdmin()
  }
}
