
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeminaireListComponent } from './seminaire-list/seminaire-list.component';
import { LoginComponent } from './login/login.component';
import { RealisationComponent } from './realisation/realisation.component';

export const routes: Routes = [
    {
      path: 'seminaires',
      component: SeminaireListComponent
    },
    {
        path: 'realisation',
        component: RealisationComponent
      },
    {
         path: 'login',
     component: LoginComponent },
     {
        path:'**',
        redirectTo:'/seminaires'
     }
  ];
  

  
  