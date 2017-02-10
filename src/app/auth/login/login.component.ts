import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = {username: "", password: ""}

  constructor(private authService:AuthService,
  private router:Router) { }

  ngOnInit() {
  }

  attemptLogin(){
    let username = this.loginData.username;
    let password = this.loginData.password;

    let result = this.authService.login(username,password);
    if(result === 202){
      console.log("success!");
      this.router.navigate(['/items']);
    }
    else if(result === 404){
      console.log("Fail!");
    }
  }
}
