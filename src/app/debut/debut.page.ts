import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debut',
  templateUrl: './debut.page.html',
  styleUrls: ['./debut.page.scss'],
})
export class DebutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slideOpts = {
    
    speed: 600,
      initialSlide: 0,
  slidesPerView: 1,
  autoplay:true

  };
}
