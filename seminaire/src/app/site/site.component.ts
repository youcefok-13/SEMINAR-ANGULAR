import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [],
  templateUrl: './site.component.html',
  styleUrl: './site.component.scss'
})
export class SiteComponent implements OnInit{
  titre!: string;
  date!: Date;
  intervenant!: String;
  lieu!: string;
  resume!:string
  
  ngOnInit() {
    this.titre = "Séminaire sur les Nouvelles Technologies";
    this.date = new Date();
    this.intervenant = "Dr. Élodie Dubois (Université Aix-Marseille)";
    this.lieu = "Salle 301, Bâtiment B, Campus Saint-Charles, Marseille";
    this.resume = "Exploration des dernières avancées en intelligence artificielle";
  }
}
