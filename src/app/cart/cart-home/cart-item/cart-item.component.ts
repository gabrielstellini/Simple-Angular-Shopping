import {Component, OnInit, Input} from '@angular/core';
import {ItemDetailDto} from "../../../shared/models/ItemDetailInterface";
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item:ItemDetailDto;

  constructor(private cartService:CartService) { }

  ngOnInit() {
  }

  removeItem(){
    this.cartService.removeFromCart(this.item.itemID);
  }

}
