import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';


import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';

// const appRoutes: Routes = [
//   // { path: 'browse', component: CrisisListComponent },
//   // { path: 'hero/:id',      component: HeroDetailComponent },
//
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', redirectTo: '/browse' }
// ];


@NgModule({
  declarations: [
    AppComponent,
    LayoutHomeComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
