import {CartHomeComponent} from "./cart-home/cart-home.component";
import {Routes, RouterModule} from "@angular/router";
import {AuthGuardService} from "../shared/services/auth-guard.service";
/**
 * Created by gabriel on 1/30/17.
 */


export const cartRoutes: Routes = [
  {
    path: 'cart',
    component: CartHomeComponent,
    //TODO: remove this Authguard, this is used to test authgoard service!
    canActivate: [AuthGuardService]
  }
];

export const cartRouting = RouterModule.forChild(cartRoutes);
