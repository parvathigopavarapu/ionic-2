import { Component } from '@angular/core';
import { NavController, NavParams, App, MenuController, ViewController } from 'ionic-angular';
import { NewOrdersPage } from '../neworders/neworders';
//import { HomePage } from "../../homemain";
import { TabsPage } from "../../tabs/tabs";

@Component({
  selector: 'page-list',

  template: `
 
  <ion-header>
      <ion-navbar align-title="center">
            <button ion-button menuToggle (click)="gotohomepage()">
              <ion-icon name="menu"></ion-icon>
            </button>
            <ion-title style="color:#ff4400;text-align:center">Orders</ion-title>
       </ion-navbar>
  </ion-header>
  
  <ion-content>
                 <ion-item class="label-neworders" style= "background-color:#ff4400;" no-padding>
                 <ion-label id="text-middle"><b>You have 25 New orders</b></ion-label>
                   </ion-item>
             
              <button ion-item  *ngFor="let item of items"(click)="itemTapped(item)" detail-push>
                                  <ion-icon class="icon-size" name="{{item.icons}}"></ion-icon>     
                                 <span class="color" id ="text-middle1" > {{item.subTitle}}</span>
                                  <ion-badge class = "badges" item-end> {{item.badge}}</ion-badge>          
              </button>
               
  </ion-content>
 `,
 

})

export class OrdersPage {
  subTitle: string[];
  sunTitle: string[];
  badge: string[];
  icons: string[];
  count: any;
  allcount: any;
  items = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public menuCtrl: MenuController, public view: ViewController) {
    this.subTitle = [
      'All Orders',
      'New Orders List',
      'Accepted Orders List',
      'Delivered Orders List',
      'Rejected Orders List'
    ];
    this.icons = ['reorder', 'cart', 'checkmark', 'car', 'close']
    this.badge = ['110', '25', '10', '25', '50' ];
    this.items = [];
    for (let i = 0; i < 5; i++) {
      this.items.push({
        subTitle: this.subTitle[i],
        badge: this.badge[i],
        icons: this.icons[i]
      });
    }
  }
  itemTapped(item) {
   // alert(JSON.stringify(item))
    this.navCtrl.push(NewOrdersPage, { newItem: item },{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  gotohomepage() {
    // this.navCtrl.push(TabsPage,{tabIndex: 0})
    // alert("hello")
    this.app.getRootNav().push(TabsPage, { tabIndex: 1 },{animate: true,direction: 'forward',animation: 'ios-transition'})
    ///this.navCtrl.pop(OrdersPage)
  }


}



