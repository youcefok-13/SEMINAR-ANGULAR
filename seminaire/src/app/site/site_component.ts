import { Component,OnInit,Input } from '@angular/core';
import { Seminaire} from '../models/site_models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site_component.html',
  styleUrl: './site_component.scss'
})
export class SiteComponent {
  @Input() seminaire!:Seminaire;
  

  
}
