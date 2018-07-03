import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, App ,ViewController} from 'ionic-angular';
import { OrdersPage} from "../";
import { Step1Page } from "../../actionpages/index";

@Component({
    selector: 'page-collection',
    templateUrl: 'collections.html'
})
export class CollectionsPage {
    modal: any;
    items = [];
    badge: any
    count: any;
    constructor(public navCtrl: NavController, public view: ViewController ,public navParams: NavParams, public alerCtrl: AlertController, public modalCtrl: ModalController, public app: App) {
        this.items = this.navParams.get('newItem');
        this.badge = this.navParams.get('newItems');
    }
    acceptOrder(data, badge) {
         let modal = this.modalCtrl.create(Step1Page, { data: 'Accept Order', badge })
         modal.present(); 
        //this.navCtrl.setRoot(Step1Page, { data: 'Accept Order', badge })
    }
    rejectOrder(data, badge) {
       // this.navCtrl.setRoot(Step1Page, { data: 'Reject Order', badge })
          let modal = this.modalCtrl.create(Step1Page, { data: 'Reject Order', badge,animate: true,direction: 'forward',animation: 'ios-transition'})
         modal.present(); 
    }
    deliverorder(data, badge) {
       // this.navCtrl.setRoot(Step1Page, { data: 'Deliver Order', badge })
          let modal = this.modalCtrl.create(Step1Page, { data: 'Deliver Order', badge,animate: true,direction: 'forward',animation: 'ios-transition'} )
         modal.present(); 
    }
    direction() {
       // this.navCtrl.setRoot(Step1Page, { data: 'Direction Order' })
          let modal = this.modalCtrl.create(Step1Page, { data: 'Direction Order',animate: true,direction: 'forward',animation: 'ios-transition'})
         modal.present(); 
    }
    print(data, badge) {
        //this.navCtrl.setRoot(Step1Page, { data: 'Print Order', badge })
           let modal = this.modalCtrl.create(Step1Page, { data: 'Print Order', badge ,animate: true,direction: 'forward',animation: 'ios-transition'})
         modal.present(); 
    }
    gotoOrdersPage(badge) {
     
       this.navCtrl.push(OrdersPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
       // modal.present();
    }

}


