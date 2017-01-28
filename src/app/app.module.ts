import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AlertModule } from 'ng2-bootstrap';


import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  imports: [
    // AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    LayoutModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
