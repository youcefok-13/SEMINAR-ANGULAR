import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator
import { Seminaire } from '../models/site_models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-seminaire',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './new-seminaire.component.html',
  styleUrl: './new-seminaire.component.scss'
})
export class NewSeminaireComponent implements OnInit {
  
  seminaireForm!: FormGroup;
  seminairePreview$!: Observable<Seminaire>;

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.seminaireForm = this.formBuilder.group({
      titre: [null],
      date: [null],
      intervenant: [null],
      lieu: [null],
      resume: [null]
    });

    this.seminairePreview$ = this.seminaireForm.valueChanges.pipe(
      map(formValue => {
        return {
          ...formValue,
        };
      })
    );
  }

  onSubmitForm(): void {
    console.log(this.seminaireForm.value);
  }
}
