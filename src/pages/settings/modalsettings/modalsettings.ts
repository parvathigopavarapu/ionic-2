import { Component } from '@angular/core';

import { ModalController, AlertController, ViewController,NavController,MenuController,NavParams} from 'ionic-angular';
//import { SettingsPage } from "../";


@Component({
   selector: 'page-modal',
  templateUrl: 'modalsettings.html'
 
})
export class ModalPage {
  item: any;
  name = [];
  add= [];
  constructor(public modalCtrl: ModalController, public nav:NavController, public viewCtrl: ViewController,public param:NavParams, public alerCtrl:AlertController,public menu:MenuController) {
      this.name = param.data;
    this.name = ['JPNagar', 'BSK','JayaNagar'];
    for (let i = 0; i < 3; i++) {
      this.add.push({
        name: this.name[i],
      });
    }
  }
ionViewDidEnter() {
    this.menu.swipeEnable(false, 'menu1');
  }

  openModal(item) {
    
    //this.nav.push(SettingsPage)
    //alert(JSON.stringify(item))
    let confirm = this.alerCtrl.create({
      message: 'Successfully Changed',
      cssClass: 'alertcss',
      buttons: [
        {
          text: 'OK',
          handler: () => {
           this.viewCtrl.dismiss();
          }
        },
      ]
    });
    confirm.present()
    // this.nav.push(SettingsPage);
   // let modal = this.modalCtrl.create(ModalContentPage, characterNum);
  //  modal.present();
   }
    close() {
    this.viewCtrl.dismiss();
  }
}
/*@Component({
  template: `
<ion-header >
  <ion-toolbar class="tool" >
    <ion-title >
      {{character.name}}
    </ion-title>
    <ion-buttons start>
      <button ion-button style="color:white" (click)="dismiss()">
       Cancel </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-start>
          <img src="{{character.image}}">
        </ion-avatar>
        <h2>{{character.name}}</h2>
      </ion-item>
      <ion-item *ngFor="let item of character['items']">
        {{item.title}}
        <ion-note item-end>
          {{item.note}}
        </ion-note>
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
   
  ) {
    var characters = [
      {
        name: 'Ashoka',
        image: 'assets/icon/restaurants1.jpg',
        items: [
          { title: 'Palav', note: '50Rs' },
          { title: 'Ice Cream', note: '100Rs' },
          { title: 'Juice', note: '50Rs' }
        ]
      },
      {
        name: 'Gokul',
        image: 'assets/icon/restaurant2.jpg',
        items: [
          { title: 'Idli', note: '20Rs' },
          { title: 'chapati', note: '30Rs' },
          { title: 'Juice', note: '50Rs' }
        ]
      },
      {
        name: 'Udupi Garden',
        image: 'assets/icon/restaurant3.jpg',
        items: [
          { title: 'Idli', note: '20Rs' },
          { title: 'chapati', note: '30Rs' },
          { title: 'Juice', note: '50Rs' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  
}*/