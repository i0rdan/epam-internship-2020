import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeGuard } from './homeguard/home.guard';
import { InfoComponent } from './info/info.component';
import { MenuComponent } from './menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'sign-in', 
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'home',
    component: HomeComponent, 
    canActivate: [
      HomeGuard
    ], 
    children: [
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      }
    ]
  },
  {
    path: '', 
    component: SignInComponent
  },
  {
    path: '**', 
    component: SignInComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
