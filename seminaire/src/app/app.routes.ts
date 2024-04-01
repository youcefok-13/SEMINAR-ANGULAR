
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeminaireListComponent } from './seminaire-list/seminaire-list.component';
import { LoginComponent } from './User/login/login.component';
import { ProposComponent } from './propos/propos.component';
import { ContactComponent } from './contact/contact.component';
import { CreationComponent } from './creation/creation.component';
import { InscriptionComponent } from './User/inscription/inscription.component';

export const routes: Routes = [
    {
      path: 'seminaires',
      component: SeminaireListComponent
    },
    {
        path: 'creation',
        component: CreationComponent
      },
    {
         path: 'login',
     component: LoginComponent 
    },
    {
      path:'propos',
      component:ProposComponent
   },
   {
    path:'contact',
    component:ContactComponent
   },
   {
    path:'inscription',
    component:InscriptionComponent
   },
     {
        path:'**',
        redirectTo:'/seminaires'
     }

  ];
  

  
  