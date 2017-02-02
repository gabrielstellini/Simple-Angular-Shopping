import { Injectable } from '@angular/core';

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

  login(username:string, password:string){
    //TODO: AttemFor debugging purposes -pt database login here
    //Assume username 1 is normal, username 2 is admin

    if(username === "1"){
      this.currUser.username = "1";
      this.currUser.isAdmin = false;
      this.currUser.authGuid = "e58607e4-af33-46ed-8fee-42225c34c2c5";
    }
    else if(username === "2"){
      this.currUser.username = "2";
      this.currUser.isAdmin = true;
      this.currUser.authGuid = "5e5325df-6b26-48fc-b44a-0497bb09209f";
    }
  }

  signout(){
    this.currUser = {
      username:"",
      authGuid:"",
      isAdmin:false
    };
  }

}
