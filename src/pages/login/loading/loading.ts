import { Component } from '@angular/core';
import { NavController, LoadingController ,ModalController} from 'ionic-angular';
import { MobileRegPage1 } from "../../mobilereg/index";
import { RestaurantmenuPage } from "../index";

@Component({
    selector: 'page-loading',
    templateUrl: 'loading.html'
})
export class LoadingPage {

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,public modalCtrl:ModalController ) { }
    ionViewDidLoad(): void {
        let loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'Loading please wait...',
            cssClass:`loading-wrappers`,

            duration: 3000
        });
    loading.present();
}
gotohomepage(){
    this.navCtrl.setRoot(RestaurantmenuPage,{animate: true,direction: 'forward',animation: 'ios-transition'});

}
gotomobilepage(){
    this.navCtrl.push(MobileRegPage1,{animate: true,direction: 'forward',animation: 'ios-transition'})
}
}