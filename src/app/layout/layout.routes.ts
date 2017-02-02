import {Routes, RouterModule} from "@angular/router";
import {userRoutes} from "../user/user.routes";
import {NgModule} from "@angular/core";
import {authRoutes} from "../auth/auth.routes";
import {cartRoutes} from "../cart/cart.routes";


export const layoutRoutes: Routes = [
  {
    path: '',
    children: [...userRoutes,
      ...authRoutes,
      ...cartRoutes]
  },
  { path: '**', redirectTo: 'items/category/oil' }
];

export const layoutRouting = RouterModule.forChild(layoutRoutes);

@NgModule({
  imports: [
    RouterModule.forRoot(layoutRoutes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
