import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [],
  templateUrl: './site.component.html',
  styleUrl: './site.component.scss'
})
export class SiteComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  
  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
  }
}
