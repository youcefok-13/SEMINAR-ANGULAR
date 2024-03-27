import { Component,OnInit,Input } from '@angular/core';
import { Seminaire} from '../models/site_models';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [],
  templateUrl: './site_component.html',
  styleUrl: './site_component.scss'
})
export class SiteComponent {
  @Input() seminaire!:Seminaire;
  

  
}
