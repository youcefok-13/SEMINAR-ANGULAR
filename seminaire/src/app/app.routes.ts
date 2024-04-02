
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeminaireListComponent } from './Components/seminaire-list/seminaire-list.component';
import { LoginComponent } from './User/login/login.component';
import { ProposComponent } from './Components/propos/propos.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CreationComponent } from './Components/creation/creation.component';
import { InscriptionComponent } from './User/inscription/inscription.component';
import { NewUtilisateurComponent } from './new-seminaire/new-seminaire.component';

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
   {path:'create',
   component:NewSeminaireComponent}
     ,{
        path:'**',
        redirectTo:'/seminaires'
     }
     


  ];
  

  
  