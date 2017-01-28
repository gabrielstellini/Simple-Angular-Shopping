import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout-home/footer/footer.component';
import {GeneralPagesModule} from "../general-pages/general-pages.module";
import {NavbarComponent} from "./layout-home/navbar/navbar.component";
import {SearchComponent} from "./layout-home/navbar/search/search.component";
import {LayoutHomeComponent} from "./layout-home/layout-home.component";
import {layoutRoutes} from "./layout.routes";


@NgModule({
  imports: [
    CommonModule,
    GeneralPagesModule,
    layoutRoutes
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    LayoutHomeComponent

  ],
  exports:[
    LayoutHomeComponent
  ]

})
export class LayoutModule {
}
