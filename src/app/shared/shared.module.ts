import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../layout/layout-home/navbar/navbar.component';
import { SearchComponent } from '../layout/layout-home/navbar/search/search.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [NavbarComponent, SearchComponent],
  exports: [NavbarComponent, SearchComponent]
})
export class SharedModule { }
