import { Component,OnInit,Input } from '@angular/core';
import { Seminaire} from '../models/site_models';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [],
  templateUrl: './site.component.html',
  styleUrl: './site.component.scss'
})
export class SiteComponent {
  @Input() seminaire!:Seminaire;
  

  
}
