import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartHomeComponent } from './cart-home/cart-home.component';
import { CartDetailComponent } from './cart-home/cart-detail/cart-detail.component';
import {CartItemComponent} from "./cart-home/cart-item/cart-item.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {cartRouting} from "./cart.routes";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    cartRouting
  ],
  declarations: [CartHomeComponent, CartItemComponent, CartDetailComponent]
})
export class CartModule { }
