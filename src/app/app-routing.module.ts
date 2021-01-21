import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdoptionPageComponent } from './pages/adoption-page/adoption-page.component';
import { AddressPageComponent } from './pages/address-page/address-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PetDetailsPageComponent } from './pages/pet-details-page/pet-details-page.component';
import {StepperComponent} from './stepper/stepper.component'
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginPageComponent
  },
  {
    path : 'logout',
    component : LogoutComponent
  },
  {
    path : 'adopt',
    component : AdoptionPageComponent
  },
  {
    path : 'address',
    component : AddressPageComponent
  },
  {
    path : 'posts',
    component : PostPageComponent
  },
  {
    path : 'pet_details',
    component : PetDetailsPageComponent
  },
  {
    path : 'stepper',
    component : StepperComponent
  },
  {
    path : '',
    component : HomePageComponent
  },
  {
    path : 'header',
    component : HeaderComponent
  },
  {
    path: '**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
