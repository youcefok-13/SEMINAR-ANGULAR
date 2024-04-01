import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})

export class InscriptionComponent implements OnInit {
  public user: User = {
    firstName: '', // Assurez-vous que firstName est initialisé avec une chaîne vide
    lastName: '', // Assurez-vous que lastName est initialisé avec une chaîne vide
    email: '', // Assurez-vous que email est initialisé avec une chaîne vide

  };

  constructor() { }

  ngOnInit(): void {
    // Initialisez d'autres propriétés ou effectuez d'autres actions nécessaires ici
  }

  saveData() {
    console.log('Valeurs:', this.user);
    console.log('Hello');
  }
}
