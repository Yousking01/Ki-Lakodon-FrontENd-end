import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { InscriptionService } from '../_service/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  //JWT
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  //RECUPERATION DU ROLE
  Listerole:any;

  //DECLARATION DES VARIABLES POUR L'INSCRIPTION
  username: string="";
  email: string="";
  password: string="";
  confirmpassword: string="";
  role: string="";

  constructor(private authService: AuthService, private inscriptionService: InscriptionService) { }

  ngOnInit() {
    this.authService.listerole().subscribe(data =>{
      this.Listerole = data;
      console.log(data);
    })
  }

  //JWT
  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

    //reload Page
    reloadPage() {
      window.location.reload();
    }


    addinscription(){
      console.log(this.form.role);
      this.inscriptionService.ajoutinscription(this.form.username,this.form.email, this.form.password,this.form.confirmpassword,this.form.role).subscribe(data =>{
        console.log(data);
      })
    }

    Role(){
      console.log(this.role)
    }

}
