import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartHomeComponent } from './cart-home/cart-home.component';
import { CartDetailComponent } from './cart-home/cart-detail/cart-detail.component';
import {CartItemComponent} from "./cart-home/cart-item/cart-item.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartHomeComponent, CartItemComponent, CartDetailComponent]
})
export class CartModule { }
