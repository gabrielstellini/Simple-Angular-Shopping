import {NgModule, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout-home/footer/footer.component';
import {UserModule} from "../user/user.module";
import {NavbarComponent} from "./layout-home/navbar/navbar.component";
import {SearchComponent} from "./layout-home/navbar/search/search.component";
import {LayoutHomeComponent} from "./layout-home/layout-home.component";
import {layoutRoutes, LayoutRoutingModule} from "./layout.routes";
import { RouterModule} from "@angular/router";
import {AuthModule} from "../auth/auth.module";
import {CartModule} from "../cart/cart.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    AuthModule,
    CartModule,
    LayoutRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    LayoutHomeComponent
  ],
  exports:[
    LayoutHomeComponent
  ],
})

export class LayoutModule {
}
