import { Component,OnInit, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteComponent } from './site/site_component';
import { CommonModule,DatePipe } from '@angular/common';
import { SeminaireListComponent } from './seminaire-list/seminaire-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SiteComponent,CommonModule,DatePipe,SeminaireListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    
  }

}

