import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-success-full',
  templateUrl: './password-success-full.page.html',
  styleUrls: ['./password-success-full.page.scss'],
})
export class PasswordSuccessFullPage implements OnInit {

  constructor(public router: Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('connexion');
    },
    2000);
  }

  ngOnInit() {
  }

}
