import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  slides = [
    {'image': '/assets/Cyber.jpg'},
    {'image': '/assets/Nier.jpg'},
    {'image': '/assets/residentvillage.jpg'}, 
    {'image': '/assets/valorant.jpg'}, 
    {'image': '/assets/lol.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
