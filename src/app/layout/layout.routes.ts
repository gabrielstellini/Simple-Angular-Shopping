import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowseItemsPaneComponent} from "../general-pages/browse-items-pane/browse-items-pane.component";


export const appRoutes: Routes = [
  { path: 'items', component: BrowseItemsPaneComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  { path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'items' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class layoutRoutes {}
