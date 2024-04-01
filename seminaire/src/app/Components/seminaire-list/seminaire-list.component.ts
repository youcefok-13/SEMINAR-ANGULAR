import { Component,OnInit } from '@angular/core';
import { Seminaire } from '../../models/site_models';
import { CommonModule } from '@angular/common';
import { SiteComponent } from '../site/site_component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-seminaire-list',
  standalone: true,
  imports: [CommonModule,SiteComponent,HeaderComponent],
  templateUrl: './seminaire-list.component.html',
  styleUrl: './seminaire-list.component.scss'
})
export class SeminaireListComponent implements OnInit {
  seminaires!: Seminaire[];

  constructor() {}

  ngOnInit(): void {
    this.seminaires = [
      {
        titre: "Séminaire sur les Nouvelles Technologies",
        date: new Date("2024-03-10"),
        intervenant: "Dr. Élodie Dubois (Université Aix-Marseille)",
        lieu: "Salle 301, Bâtiment B, Campus Saint-Charles, Marseille",
        resume: "Exploration des dernières avancées en intelligence artificielle"
      },
      {
        titre: "Conférence sur la Médecine du Futur",
        date: new Date("2024-03-15"),
        intervenant: "Prof. Nicolas Durand (Centre Hospitalier Universitaire de la Timone)",
        lieu: "Amphithéâtre C, Faculté de Médecine, Marseille",
        resume: "Perspectives et défis de la médecine personnalisée"
      },
      {
        titre: "Séminaire de Physique Quantique",
        date: new Date("2024-03-20"),
        intervenant: "Dr. Jeanne Leroux (Institut de Physique de Marseille)",
        lieu: "Amphithéâtre 102, Campus Luminy, Marseille",
        resume: "Compréhension des phénomènes quantiques dans les systèmes complexes"
      },
      {
        titre: "Colloque sur l'Écologie Urbaine",
        date: new Date("2024-03-25"),
        intervenant: "Dr. Pierre Lefèvre (Laboratoire d'Écologie Urbaine)",
        lieu: "Salle Polyvalente, Mairie du 1er arrondissement, Marseille",
        resume: "Stratégies de préservation de la biodiversité en milieu urbain"
      },
      {
        titre: "Séminaire de Littérature Comparée",
        date: new Date("2024-04-05"),
        intervenant: "Prof. Camille Martin (Université Paul Valéry, Montpellier)",
        lieu: "Salle des Actes, Bibliothèque Alcazar, Marseille",
        resume: "Analyse des influences croisées entre littératures européennes et asiatiques"
      },
      {
        titre: "Conférence sur l'Art Contemporain",
        date: new Date("2024-04-10"),
        intervenant: "Dr. Théo Roussel (Centre d'Art Contemporain, Marseille)",
        lieu: "Auditorium, Centre d'Art Contemporain, Marseille",
        resume: "Étude des tendances et des courants artistiques émergents"
      },
      {
        titre: "Séminaire sur l'Économie Sociale",
        date: new Date("2024-04-15"),
        intervenant: "Prof. Claire Dubois (Laboratoire d'Économie Sociale et Solidaire)",
        lieu: "Salle des Conférences, Maison de l'Économie Sociale et Solidaire, Marseille",
        resume: "Impact des entreprises sociales sur le développement économique local"
      },
      {
        titre: "Conférence sur la Cyber-sécurité",
        date: new Date("2024-04-20"),
        intervenant: "Dr. Martin Lambert (Centre de Recherche en Sécurité Informatique)",
        lieu: "Amphithéâtre 105, Campus Saint-Jérôme, Marseille",
        resume: "Stratégies de défense contre les cybermenaces émergentes"
      },
      {
        titre: "Séminaire sur la Psychologie du Travail",
        date: new Date("2024-04-25"),
        intervenant: "Dr. Sophie Girard (Laboratoire de Psychologie du Travail)",
        lieu: "Salle des Séminaires, Faculté de Psychologie, Marseille",
        resume: "Facteurs psychosociaux et performance au travail"
      },
      {
        titre: "Colloque sur la Philosophie de la Science",
        date: new Date("2024-05-05"),
        intervenant: "Prof. Julien Martinez (Centre de Philosophie des Sciences)",
        lieu: "Auditorium René Char, Théâtre La Criée, Marseille",
        resume: "Débats contemporains autour de la méthodologie scientifique"
      }
      // Ajoutez d'autres séminaires réels ici...
    ];
  }
}