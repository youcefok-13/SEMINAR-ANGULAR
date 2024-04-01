import { Component,OnInit } from '@angular/core';
import { NgForm,FormsModule  } from '@angular/forms';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent implements OnInit{ 
   public user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  public saveData(registerForm: NgForm) {
    console.log(registerForm.form);
    console.log('valeurs: ', JSON.stringify(registerForm.value));
    console.log('hello');
  }
}


