import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
/**
 * Created by gabriel on 2/2/17.
 */

export const authRoutes: Routes = [
  {
    path: 'login',
    component:  LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

export const authRouting = RouterModule.forChild(authRoutes);
