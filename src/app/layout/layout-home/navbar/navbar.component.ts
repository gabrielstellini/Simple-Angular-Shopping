import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
  }

}
