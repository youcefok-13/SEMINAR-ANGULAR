import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl,FormsModule } from '@angular/forms';
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
  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    sendCatalog: new FormControl(true)
  });
   public user: User = new User();

  constructor() { }

  ngOnInit(): void {

  }
  public saveData() {
    console.log(this.registerForm);
    console.log('valeurs: ', JSON.stringify(this.registerForm.value));
    console.log('hello');
  }
}


