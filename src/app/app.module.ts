import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {LayoutModule} from "./layout/layout.module";

import {RouterModule} from "@angular/router";
import {AgmCoreModule} from "angular2-google-maps/core";
// import {AppRouting} from "./app.routes";

@NgModule({
  imports: [
    // AppRouting,
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    LayoutModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAH9RKhaaIYk5xMXSo6dKDD1LMhvi51cy4'
    })
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
