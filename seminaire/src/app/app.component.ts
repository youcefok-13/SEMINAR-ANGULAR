import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteComponent } from './site/site.component';
import { Seminaire } from './models/site_models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  seminaire1!:Seminaire;
  seminaire2!:Seminaire;
  seminaire3!:Seminaire;


  ngOnInit(){
    this.seminaire1=new Seminaire( "Séminaire sur les Nouvelles Technologies",
    new Date(),
   "Dr. Élodie Dubois (Université Aix-Marseille)",
    "Salle 301, Bâtiment B, Campus Saint-Charles, Marseille",
    "Exploration des dernières avancées en intelligence artificielle");

  
  this.seminaire2=new Seminaire( "Séminaire sur les Nouvelles Technologies",
  new Date(),
 "Dr. Élodie Dubois (Université Aix-Marseille)",
  "Salle 301, Bâtiment B, Campus Saint-Charles, Marseille",
  "Exploration des dernières avancées en intelligence artificielle");


this.seminaire3=new Seminaire( "Séminaire sur les Nouvelles Technologies",
new Date(),
"Dr. Élodie Dubois (Université Aix-Marseille)",
"Salle 301, Bâtiment B, Campus Saint-Charles, Marseille",
"Exploration des dernières avancées en intelligence artificielle");


  }
}