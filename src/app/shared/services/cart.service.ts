import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {ItemDetailDto} from "../models/ItemDetailInterface";

@Injectable()
export class CartService {

  constructor(private authService:AuthService,
              private router:Router) { }

  //TODO: Remove cartItems, it is being used as a mock of the service
  cartItems: string[] = [];

  //Before each call, it is ensured the user is logged in. This will prevent problems
  //if the user has the cart open in another tab

  addToCart(itemID:string){
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    else{
      //TODO: POST query database here with items to add and  with authguid as a post parameter
      // this.authService.currUser.authGuid

      //TODO: remove in final
      this.cartItems.push(itemID);

    }
  }

  removeFromCart(itemID:string){
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    else{
      //TODO: POST query with item to remove and with authguid as a post parameter
      // this.authService.currUser.authGuid

      //TODO: remove in final
      let index = this.cartItems.indexOf(itemID);
      if (index > -1) {
        this.cartItems= this.cartItems.splice(index, 1);
      }

    }
  }

  findAll():string[]{
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
    }
    else{
      //TODO: GET query with authguid as a post parameter

      //TODO: remove in final

      return this.cartItems;
    }
  }

}
