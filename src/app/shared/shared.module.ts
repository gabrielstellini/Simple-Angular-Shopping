import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { BrowseItemComponent } from './browse-item/browse-item.component';

import { NavCategoriesComponent } from './nav-categories/nav-categories.component';
import {RouterModule} from "@angular/router";
import {ItemService} from "./services/item.service";



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
    ItemService
  ]
})
export class SharedModule { }
