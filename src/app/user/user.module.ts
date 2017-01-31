import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowseItemsComponent } from './browse-items/browse-items.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { BrowseItemDetailsComponent } from './browse-item-details/browse-item-details.component';
import {ItemDetailsComponent} from "./browse-item-details/item-details/item-details.component";
import {userRouting} from "./user.routes";
import {ItemRecommendationComponent} from "./browse-item-details/item-details/item-recommendation/item-recommendation.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    userRouting
  ],
  declarations: [
    AboutComponent,
    ContactComponent,
    BrowseItemsComponent,
    ItemDetailsComponent,
    BrowseItemDetailsComponent,
    ItemRecommendationComponent
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    BrowseItemsComponent,
    BrowseItemDetailsComponent,
    ItemRecommendationComponent
  ]
})
export class UserModule { }
