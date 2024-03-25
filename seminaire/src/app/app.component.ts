import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteComponent } from './site/site.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'seminaire';
}
