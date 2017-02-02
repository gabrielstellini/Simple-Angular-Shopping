import {RouterModule, Routes} from "@angular/router";
import {BrowseItemDetailsComponent} from "./browse-item-details/browse-item-details.component";
import {BrowseItemsComponent} from "./browse-items/browse-items.component";

export const userRoutes: Routes = [
  {
    path: 'items/category/:category',
    component:  BrowseItemsComponent,
  },
  {
    path: 'item/:id',
    component: BrowseItemDetailsComponent,
  }
];

export const userRouting = RouterModule.forChild(userRoutes);
