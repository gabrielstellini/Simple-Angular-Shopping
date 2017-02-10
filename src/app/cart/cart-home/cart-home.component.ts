import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../shared/services/item.service";
import {CartService} from "../../shared/services/cart.service";
import {ItemDetailDto} from "../../shared/models/ItemDetailInterface";

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.scss']
})
export class CartHomeComponent implements OnInit {


  items:ItemDetailDto[];
  totalPrice:number;

  constructor(private itemService:ItemService,
              private cartService:CartService) {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.calculateTotalPrice();
  }

  ngOnInit() {
  }
}
