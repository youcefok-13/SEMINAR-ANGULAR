import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-seminaire',
  standalone: true,
  imports: [],
  templateUrl: './new-seminaire.component.html',
  styleUrl: './new-seminaire.component.scss'
})
export class NewSeminaireComponent implements OnInit{
  seminaireForm!:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    
  }


  ngOnInit(): void {
    this.seminaireForm=this.formBuilder.group({
      titre:[null],
      date:[null],
      intervenant:[null],
      lieu:[null],
      resume:[null]

    })
  }
  onSubmitForm(): void{
    console.log(this.seminaireForm.value);
  }

}
