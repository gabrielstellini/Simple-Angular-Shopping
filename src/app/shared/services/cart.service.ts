import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {ItemDetailDto} from "../models/ItemDetailInterface";
import {ItemService} from "./item.service";

@Injectable()
export class CartService {

  constructor(private authService:AuthService,
              private router:Router,
              private itemService:ItemService) { }

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

      //TODO: remove in final - should be handled in DB
      let index = this.cartItems.indexOf(itemID);

      if (index > -1) {
        this.cartItems.splice(index, 1);

      }
      console.log(this.cartItems)

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

  getItems():ItemDetailDto[]{
    let itemIDs:string[] = this.findAll();
    let items:ItemDetailDto[] = this.itemService.getItemsByID(itemIDs)
    return items;
  }

  calculateTotalPrice():number{
    let result:number = 0;
    let items:ItemDetailDto[] = this.getItems();

    for(let i=0;i<items.length;i++){
      result+=items[i].price;
    }
    return result;
  }
}
