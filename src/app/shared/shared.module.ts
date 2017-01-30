import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { BrowseItemComponent } from './browse-item/browse-item.component';

import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemRecommendationComponent } from './item-detail/item-recommendation/item-recommendation.component';
import {ItemDetailInterface} from "./ItemDetailInterface";
import { NavCategoriesComponent } from './nav-categories/nav-categories.component';
import {RouterModule} from "@angular/router";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    BrowseItemComponent,

    ItemDetailComponent,
    ItemRecommendationComponent,
    NavCategoriesComponent
  ],

  exports: [
    BrowseItemComponent,
    NavCategoriesComponent,
    ItemDetailComponent,
    ItemRecommendationComponent
  ]
})
export class SharedModule { }
