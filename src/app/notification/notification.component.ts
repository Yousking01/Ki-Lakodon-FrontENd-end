import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  constructor(private pvrc:PopoverController) { }

  ngOnInit() {}

  close(){
    this.pvrc.dismiss()
  }
}
