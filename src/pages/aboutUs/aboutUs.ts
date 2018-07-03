import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HolidayPage } from "../holiday/index";
import { HomePage } from "../homemain/index";


@Component({
  selector: 'page-about',
  templateUrl: 'aboutUs.html'
})
export class AboutUsPage {
  activeTab = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  holiday() {
    // this.navCtrl.setRoot(HolidayPage)
    let modal = this.modalCtrl.create(HolidayPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
    modal.present();
  }
  doYourStuff(){
    
    this.navCtrl.pop(HomePage)
  }

}
