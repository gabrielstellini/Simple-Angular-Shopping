import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { BrowseItemComponent } from './browse-item/browse-item.component';
import { CatagoriesPaneComponent } from './catagories-pane/catagories-pane.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemRecommendationComponent } from './item-detail/item-recommendation/item-recommendation.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BrowseItemComponent,
    CatagoriesPaneComponent,
    ItemDetailComponent,
    ItemRecommendationComponent
  ],

  exports: [
  ]
})
export class SharedModule { }
