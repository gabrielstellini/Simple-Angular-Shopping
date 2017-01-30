import {Routes, RouterModule} from "@angular/router";
import {userRoutes} from "../user/user.routes";
import {NgModule} from "@angular/core";
import {LayoutHomeComponent} from "./layout-home/layout-home.component";


export const layoutRoutes: Routes = [
  {
    path: '',
    // component: LayoutHomeComponent,
    children: [...userRoutes]
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
