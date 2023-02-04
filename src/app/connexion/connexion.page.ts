// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { TokenStorageService } from '../_service/token-storage.service';
import { ICredential } from '../_interfaces/credential';
import { Router } from '@angular/router';

// interface ICredentials{
//   username : string,
//   password: string
// }

// interface IToken{
//   accessToken: string
// }

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  //JWT
  form: ICredential = {
    username: '',
    password: ''
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  user: any;
  constructor(private route: Router, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
//     if (this.tokenStorage.getToken()) {
//       this.isLoggedIn = true;
//       this.roles = this.tokenStorage.recupererUser().roles;
//       // console.log("roleee"+ this.roles);
//     }
// if(this.tokenStorage.recupererUser()){
//   this.user = this.tokenStorage.recupererUser().roles;
//   console.log("userrr"+ this.user);
// }

//     this.user = this.tokenStorage.recupererUser();
  }
  

  onSubmit() {

    console.log(this.form)
    this.authService.login(this.form).subscribe(
      data => {console.log(data.accessToken)
        localStorage.setItem('token', data.accessToken)
        this.tokenStorage.saveToken(data.accessToken)
          
      },
      err  => console.log(err)
    )
    // // console.log("avant methode=================")
    // this.authService.login(this.form).subscribe(
    //   data => {
    //     this.tokenStorage.saveToken(data.accessToken, this.user);
    //     // this.tokenStorage.connexionReussi(data);
    //     console.log(this.tokenStorage);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.recupererUser().roles;
    //     this.reloadPage();
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }

  reloadPage() {
    window.location.reload();
  }

}
