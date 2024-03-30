import { Component,OnInit, } from '@angular/core';
import { RouterOutlet,Router  } from '@angular/router';
import { SiteComponent } from './site/site_component';
import { CommonModule,DatePipe } from '@angular/common';
import { SeminaireListComponent } from './seminaire-list/seminaire-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SiteComponent,CommonModule,DatePipe,SeminaireListComponent,HeaderComponent,FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {

  constructor(private router: Router) {}

  // AFFICHER LA LISTE DE SEMINAIRE SEULEMENT LORSQUE QUE L UTILISATEUR EST A LA PAGE DES SEMINAIRES
  isOnSeminairesRoute(): boolean {
    return this.router.url === '/seminaires';
  }
}

