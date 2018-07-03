import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, App} from 'ionic-angular';
//import { OrdersPage } from "../index";

@Component({
    selector: 'page-modal',
    templateUrl: 'homemodal.html'
})
export class HomeModalPage {
    shouldAnimate: boolean = true;
//private loading: Loading;
    constructor(public navCtrl: NavController, public alerCtrl: AlertController, public loadingCtrl: LoadingController, public app: App) {

    }

    ionViewDidLoad(): void {
          let loading = this.loadingCtrl.create({
            content: '  loading Please wait...'
        });
       loading.present();
          setTimeout(() => {
            loading.dismiss();
        }, 2500);
      
    }
}
