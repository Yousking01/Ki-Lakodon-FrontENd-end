import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.page.html',
  styleUrls: ['./board-admin.page.scss'],
})
export class BoardAdminPage implements OnInit {
  content = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

    //reload Page
    reloadPage() {
      window.location.reload();
    }

}
