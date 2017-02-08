import {CartHomeComponent} from "./cart-home/cart-home.component";
import {AuthGuardService} from "../shared/services/auth-guard.service";
import {CreditCardScreenComponent} from "./credit-card-screen/credit-card-screen.component";
import {Routes, RouterModule} from "@angular/router";
/**
 * Created by gabriel on 1/30/17.
 */


export const cartRoutes: Routes = [
  {
    path: 'cart',
    component: CartHomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'pay',
    component: CreditCardScreenComponent,
    canActivate: [AuthGuardService]
  }
];

export const cartRouting = RouterModule.forChild(cartRoutes);
