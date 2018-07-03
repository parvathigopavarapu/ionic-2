import { Component } from '@angular/core';
import { NavController, NavParams, App, MenuController, ViewController,ModalController} from 'ionic-angular';
//import { NewOrdersPage } from '../neworders/neworders';
//import { HomePage } from "../../homemain";
import { TabsPage } from "../../tabs/tabs";
import { TableReservationPage, ReservationListPage, CreateReservationPage } from "../index";

@Component({
  selector: 'page-list123',

  template: `
 
  <ion-header>
      <ion-navbar align-title="center">
            <button ion-button menuToggle (click)="gotohomepage()">
              <ion-icon name="menu"></ion-icon>
            </button>
            <ion-title style="color:#ff4400;text-align:center">Table Reservations</ion-title>
       </ion-navbar>
  </ion-header>
  
  <ion-content>
                 <ion-item class="label-neworders" style= "background-color:#ff4400;" no-padding>
                 <ion-label id="text-middle"><b>You have 25 New Reservations</b></ion-label>
                   </ion-item>
             
              <button ion-item  *ngFor="let item of items"(click)="itemTapped(item)" detail-push>
                                     <ion-icon name="{{item.icons}}"></ion-icon>
                                 <span class="color" id ="text-middle1" > {{item.subTitle}}</span>
                                  <ion-badge class = "badges" item-end> {{item.badge}}</ion-badge>          
              </button>
            
            <button ion-button (click)="createReservation()" style ="margin-top:70px;margin-left:180px;background:none;background-color:none;box-shadow:none;width:160px;height:180px">    <ion-icon name="add-circle" style="color:#ff4400;font-size:70px"></ion-icon></button>
  </ion-content>
 `,
 

})

export class TableReservationMainPage {
  subTitle: string[];
  sunTitle: string[];
  badge: string[];
  icons: string[];
  count: any;
  allcount: any;
  items = [];
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public menuCtrl: MenuController, public view: ViewController,public modalCtrl: ModalController) {
    this.subTitle = [
      'All Reservations',
      'New Reservations List',
      'Confirmed Reservations List',
      'Completed Reservations List',
      'Rejected Reservations List'
    ];
   
    this.badge = ['110', '25', '10', '25', '50' ];
    this.icons = ['reorder','contacts','checkmark','checkmark-circle-outline','close-circle']
    this.items = [];
    for (let i = 0; i < 5; i++) {
      this.items.push({
        subTitle: this.subTitle[i],
        badge: this.badge[i],
        icons:this.icons[i]
      });
    }
  }
  itemTapped(item) {
   // alert(JSON.stringify(item))
  //  this.navCtrl.push(NewOrdersPage, { newItem: item },{animate: true,direction: 'forward',animation: 'ios-transition'})
  this.navCtrl.push(ReservationListPage, { newItem: item },{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  gotohomepage() {
    // this.navCtrl.push(TabsPage,{tabIndex: 0})
    // alert("hello")
    this.app.getRootNav().push(TabsPage, { tabIndex: 1 },{animate: true,direction: 'forward',animation: 'ios-transition'})
    ///this.navCtrl.pop(OrdersPage)
  }
  createtable(){
    this.navCtrl.push(TableReservationPage)
  }
createReservation(){
    let myModal = this.modalCtrl.create(CreateReservationPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
    myModal.present();
}

}



