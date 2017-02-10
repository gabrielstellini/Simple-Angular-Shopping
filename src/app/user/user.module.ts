import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowseItemsComponent } from './browse-items/browse-items.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { BrowseItemDetailsComponent } from './browse-item-details/browse-item-details.component';
import {ItemDetailsComponent} from "./browse-item-details/item-details/item-details.component";
import {ItemRecommendationComponent} from "./browse-item-details/item-details/item-recommendation/item-recommendation.component";
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    AboutComponent,
    ContactComponent,
    BrowseItemsComponent,
    ItemDetailsComponent,
    BrowseItemDetailsComponent,
    ItemRecommendationComponent,
    AddItemComponent
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    BrowseItemsComponent,
    BrowseItemDetailsComponent,
    ItemRecommendationComponent,
    AddItemComponent
  ]
})
export class UserModule { }
