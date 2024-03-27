import { Component,OnInit,Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteComponent } from './site/site_component';
import { Seminaire } from './models/site_models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SiteComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  seminaires!: Seminaire[];

  ngOnInit(): void {
    this.seminaires = [
      {
        titre: "Séminaire sur les Nouvelles Technologies",
        date: new Date(),
        intervenant: "Dr. Élodie Dubois (Université Aix-Marseille)",
        lieu: "Salle 301, Bâtiment B, Campus Saint-Charles, Marseille",
        resume: "Exploration des dernières avancées en intelligence artificielle"
      },
      {
        titre: "Séminaire sur les Nouvelles Technologies",
        date: new Date(),
        intervenant: "Dr. Élodie Dubois (Université Aix-Marseille)",
        lieu: "Salle 301, Bâtiment B, Campus Saint-Charles, Marseille",
        resume: "Exploration des dernières avancées en intelligence artificielle"
      },
      {
        titre: "Séminaire sur les Nouvelles Technologies",
        date: new Date(),
        intervenant: "Dr. Élodie Dubois (Université Aix-Marseille)",
        lieu: "Salle 301, Bâtiment B, Campus Saint-Charles, Marseille",
        resume: "Exploration des dernières avancées en intelligence artificielle"
      }
    ];
  }
}