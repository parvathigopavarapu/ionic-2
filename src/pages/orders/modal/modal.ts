import { Component } from '@angular/core';
import { NavController, AlertController ,LoadingController,App} from 'ionic-angular';
import { OrdersPage } from "../index";

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {
 

  ;

  constructor(public navCtrl: NavController, public alerCtrl: AlertController,public loadingCtrl:LoadingController,public app:App) {

  }
  dismiss() {
    this.navCtrl.pop();
  }

  acceptedOrder() {
    this.navCtrl.pop();
    let confirm2 = this.alerCtrl.create({
      message: 'Successfully order placed',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            setTimeout(() => {
              this.app.getRootNav().push(OrdersPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
            }, 1500)
          },

        }]
    })
     
    confirm2.present()

  }

}
