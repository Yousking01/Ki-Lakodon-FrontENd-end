import { Component, OnInit } from '@angular/core';
// import { EmailComposerOptions } from '@awesome-cordova-plugins/email-composer';
import { EmailComposer, EmailComposerOptions } from '@awesome-cordova-plugins/email-composer/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
// import { CameraSource } from '@capacitor/camera/dist/esm/definitions';
// import { Camera } from '@awesome-cordova-plugins/camera/ngx';
// import { EmailComposer } from '@ionic-native/email-composer';
import { NavController } from '@ionic/angular';
// import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.page.html',
  styleUrls: ['./sendmail.page.scss'],
})
export class SendmailPage implements OnInit {
  currentImage : any;
  hasAccount = true;
  imageData :any;
  modal: any;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  email!:any
  // camera: any;

  constructor( private emailComposer: EmailComposer, private navCtrl: NavController) { }
 
  ngOnInit() {
    // this.email = {
    //   to: 'max@mustermann.de',
    //   cc: 'erika@mustermann.de',
    //   bcc: ['john@doe.com', 'jane@doe.com'],
    //   attachments: [
    //    `base64:image.jpg//${this.imageData}`
    //    //  'file://img/logo.png',
    //    //  'res://icon.png',
    //    //  'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
    //    //  'file://README.pdf'
    //   ],
    //   subject: 'Cordova Icons',
    //   body: 'How are you? Nice greetings from Leipzig',
    //   isHtml: true
    // };
  }

  async checkAccount() {
    this.hasAccount = await this.emailComposer.hasAccount();
  }

 async captureImage() {
  const image = await Camera.getPhoto({
    quality:90,
    allowEditing: false,
    resultType: CameraResultType.Base64,
    source: CameraSource.Camera, //Camera, Photos or Prompt!
  });

  // var imageUrl = image.webPath;
  // imageElement.src = imageUrl;
  this.imageData = image.base64String;
  this.currentImage = `data:image/jpeg;base64,${image.base64String}`;
// const options = {
//   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
//   destinationType: this.camera.DestinationType.FILE_URI

// }
//   this.camera.getPicture(options).then(imageData => {
//     this.currentImage = imageData;
//   }, err => {
//     console.log('Image error: ', err);
//   });


  }


 async sendEmail() {
    const email: EmailComposerOptions = {
      to: 'djireyoussouf1999gmail.com',
      cc: 'fantisca747@gmail.com',
      attachments: [
        `base64:image.jpg/${this.imageData}`
      ],
      subject: 'My cool image',
      body: 'Salut cest comment !! <br><br>',
      
    };
    // this.emailComposer.open(this.email);
    await this.emailComposer.open(email);
  }

    //reload Page
    reloadPage() {
      window.location.reload();
    }
// async sendEmail() {

// this.emailComposer.isAvailable().then((available: boolean) =>{
//   if(available) {
//     //Now we know we can send
//   }
//  });
 
  
 
 // Send a text message using default options
//  this.emailComposer.open(this.email);

}

// cancel() {
//   this.modal.dismiss(null, 'cancel');
// }

// ajoutannonce() {
//   this.modal.dismiss(this.titreannonce, 'confirm');
// }

// onWillDismiss(event: Event) {
//   const ev = event as CustomEvent<OverlayEventDetail<string>>;
//   if (ev.detail.role === 'confirm') {
//     this.message = `Hello, ${ev.detail.data}!`;
//   }
// }

// cancel() {
//   this.modal.dismiss(null, 'cancel');
// }

// confirm() {
//   this.modal.dismiss(this.name, 'confirm');
// }

// onWillDismiss(event: Event) {
//   const ev = event as CustomEvent<OverlayEventDetail<string>>;
//   if (ev.detail.role === 'confirm') {
//     this.message = `Hello, ${ev.detail.data}!`;
//   }
// }
// }
