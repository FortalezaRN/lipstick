import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
    children: [
      {
        path: 'signin',
        loadChildren: '../signin/signin.module#SigninPageModule'
      },
      {
        path: 'signup',
        loadChildren: '../signup/signup.module#SignupPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login/signin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
