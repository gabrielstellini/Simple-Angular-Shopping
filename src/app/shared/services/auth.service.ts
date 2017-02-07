import { Injectable } from '@angular/core';
import {UserDetailInterface} from "../models/UserDetailInterface";

export interface userData {
  username: string;
  authGuid:string;
  isAdmin:boolean;
}


@Injectable()
export class AuthService {

  currUser:userData = {username:"",authGuid:"",isAdmin:false};

  constructor() {

  }

  login(email:string, password:string):number{
    //TODO: database login here
    //TODO: Success/fail database communication here
    //Assume username 1 is a normal user, username 2 is an admin

    if(email === "1@1.1"){
      this.currUser.username = "1";
      this.currUser.isAdmin = false;
      this.currUser.authGuid = "e58607e4-af33-46ed-8fee-42225c34c2c5";
      return 202;
    }
    else if(email === "demo@321.321"){
      this.currUser.username = "2";
      this.currUser.isAdmin = true;
      this.currUser.authGuid = "5e5325df-6b26-48fc-b44a-0497bb09209f";
      return 202;
    }

    return 404;
  }

  signout(){
    this.currUser = {
      username:"",
      authGuid:"",
      isAdmin:false
    };
  }

  isLoggedIn():boolean{
    if(this.currUser.username === "" || this.currUser.username == null){
      return false;
    }
    return true;
  }

  register(registerData:UserDetailInterface){
    //TODO: database user register here
  }

}
