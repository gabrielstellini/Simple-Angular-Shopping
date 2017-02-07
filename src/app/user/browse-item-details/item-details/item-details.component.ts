import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../../shared/services/item.service";
import {ItemDetailDto} from "../../../shared/models/ItemDetailInterface";
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  itemID:string;
  itemDetails: ItemDetailDto;

  constructor(private activatedRoute: ActivatedRoute,
              private itemService:ItemService,
              private cartService: CartService) {


    activatedRoute.params.subscribe(param => {
       this.itemID = param['id'];
    });
  }

  ngOnInit() {
    this.itemDetails = this.itemService.getItem(this.itemID);
  }

  addToCart(){
    this.cartService.addToCart(this.itemID);
    console.log(this.cartService.findAll());
  }

}
