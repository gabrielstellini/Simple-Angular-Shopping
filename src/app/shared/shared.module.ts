import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { BrowseItemComponent } from './browse-item/browse-item.component';

import { NavCategoriesComponent } from './nav-categories/nav-categories.component';
import {RouterModule} from "@angular/router";
import {ItemService} from "./services/item.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    BrowseItemComponent,
    NavCategoriesComponent
  ],
  exports: [
    BrowseItemComponent,
    NavCategoriesComponent
  ],
  providers:[
    ItemService,
    AuthGuardService,
    AuthService
  ]
})
export class SharedModule { }
