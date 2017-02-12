import {RouterModule, Routes} from "@angular/router";
import {BrowseItemDetailsComponent} from "./browse-item-details/browse-item-details.component";
import {BrowseItemsComponent} from "./browse-items/browse-items.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {AddItemComponent} from "./add-item/add-item.component";
import {AdminGuardService} from "../shared/services/admin-guard.service";
import {SearchResultsComponent} from "./search-results/search-results.component";

export const userRoutes: Routes = [
  {
    path: 'items/category/:category',
    component:  BrowseItemsComponent,
  },
  {
    path: 'item/:id',
    component: BrowseItemDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'add',
    component: AddItemComponent,
    canActivate: [AdminGuardService]
  },
  {
    path: 'search/:searchQuery',
    component:  SearchResultsComponent,
  }
];

export const userRouting = RouterModule.forChild(userRoutes);
