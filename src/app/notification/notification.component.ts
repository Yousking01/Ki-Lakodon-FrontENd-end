import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationService } from '../_service/notification.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  Listenotif: any;

  constructor(private pvrc:PopoverController, private notificationsevice: NotificationService) { }

  ngOnInit() {
    this.notificationsevice.listenotif().subscribe(data => {
      this.Listenotif = data ;
      console.log(data);
    })
  }

  close(){
    this.pvrc.dismiss()
  }

    //reload Page
    reloadPage() {
      window.location.reload();
    }
}
