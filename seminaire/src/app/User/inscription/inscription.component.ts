import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})

export class InscriptionComponent implements OnInit {

    userEmail!: string; // Assurez-vous que email est initialisé avec une chaîne vide



  constructor() { }

  ngOnInit(): void {
    // Initialisez d'autres propriétés ou effectuez d'autres actions nécessaires ici
  }

  onSubmitForm(form:NgForm): void{
    console.log(form.value);
  }
}
