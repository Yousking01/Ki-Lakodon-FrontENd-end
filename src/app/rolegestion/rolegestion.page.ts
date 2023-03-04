import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-rolegestion',
  templateUrl: './rolegestion.page.html',
  styleUrls: ['./rolegestion.page.scss'],
})
export class RolegestionPage implements OnInit {

  
  //RECUPERATION DU ROLE
  Listerole:any;
  role: string="";
  roleId: any;

  constructor(private alertController: AlertController, private router: Router, private route: ActivatedRoute , private authService: AuthService,) { }

  ngOnInit() {
      this.authService.listerole().subscribe(data =>{
      this.Listerole = data;
      console.log(data);
    });
  }
  onRoleSelect(event: any) {
    console.log('Sélection du rôle:', this.role);
    // console.log('listeeee roleeeeee:', this.Listerole);
    const role = event.target.value;
    this.router.navigate(['/inscription', role]);
  }
 envoyerrole() {
    if(this.role === '2'){
      this.router.navigate(['/inscription', this.role]);
    } else if(this.role === '3'){
      this.router.navigate(['/inscription', this.role]);
    } else{
      this.router.navigate(['/inscription', this.role]);
    }
  }
// onRoleSelect(event: any) {
  //   const roleId = event.target.value;
  //   this.router.navigate(['/inscription', roleId]);
  // }
   // Role(){
  //   console.log(this.role)
  // }

  // onRoleSelect(event: Event) {
  //   const roleId = (event.target as HTMLSelectElement).value;
  //   this.router.navigate(['/inscription', roleId]);
  // }
}
