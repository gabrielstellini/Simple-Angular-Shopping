import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {UserDetailInterface} from "../../shared/models/UserDetailInterface";
import {COUNTRIES} from "../../shared/constants/countries";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  confirmPassword:string = "";

  //TODO: PHP should create a userID, and ignore isStaff (and set it to false anyway)
  //Validation of password will take place in js using confirmPassword above ^

  registerData:UserDetailInterface =
    {
      userId:undefined,
      name: "",
      surname: "",
      email: "",
      telephone: "",
      country: "Malta",
      city: "",
      street: "",
      houseNumber:undefined,
      postcode: "",
      username: "",
      password: "",
      isStaff:false
    };


  private country_list = COUNTRIES;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  attemptRegister(){
    //TODO: Form validation occurs here (password confirmation, length of telephone field, username available, email not in use)
    this.authService.register(this.registerData);
    //TODO: Notification here (if success or fail)
  }
}
