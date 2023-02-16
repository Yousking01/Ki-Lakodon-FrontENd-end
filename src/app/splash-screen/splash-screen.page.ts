import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
splash: any;
screen: any;

  constructor(public router: Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('/tabs/home');
    },
    3000);
  }
  


  ngOnInit() {
  }

}
