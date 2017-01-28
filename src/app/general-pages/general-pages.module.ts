import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowseItemsPaneComponent } from './browse-items-pane/browse-items-pane.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutComponent,
    ContactComponent,
    BrowseItemsPaneComponent
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    BrowseItemsPaneComponent
  ]
})
export class GeneralPagesModule { }
