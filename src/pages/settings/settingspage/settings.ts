import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController, App, ViewController } from 'ionic-angular';

//import { ModalPage,ModalContentPage } from "../";
import { ModalPage } from '../';
import { TabsPage } from "../../tabs/tabs";
import { HomePage } from "../../homemain/index";

@Component({
  selector: 'page-setting',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  item = [];
  constructor(public navCtrl: NavController, public params: NavParams, public modalCtrl: ModalController, public alerCtrl: AlertController, public app: App, public viewCtrl: ViewController) {

  }

  logout() {

    let confirm = this.alerCtrl.create({
      message: 'Are you sure,do you want to logout?',
      cssClass: 'alertcss',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push(HomePage)
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()

  }
  exit() {
    this.navCtrl.push(HomePage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  openModal() {
    let myModal = this.modalCtrl.create(ModalPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
    myModal.present();
  }
   gotohomepage(){
     this.app.getRootNav().push(TabsPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
   }
}
