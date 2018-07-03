import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController, App, ViewController } from 'ionic-angular';

import { TabsPage } from "../../tabs/tabs";
import { HomePage } from "../../homemain/index";

@Component({
  selector: 'page-restaurantmenu',
  templateUrl: 'restaurantmenu.html'
})
export class RestaurantmenuPage{
day: any;
detail: any;
badge_c:any;
badge_i: any;
icon: any;
 items = [];
 color : boolean = true;
  constructor(public navCtrl: NavController, public params: NavParams) {
this.day = ['Day Menu','Evening Menu','Delivery Menu','Online Menu'];
this.detail = ['Here is a sample lunch for a restaurant','Here is a delicious snacks for a restaurant','We will deliver food to people`s homes','Here is a delocious snacks menu for a restaurant']
this.badge_c = [5,6,7,8]
this.badge_i = [30,45,54,23]
this.icon = ['checkmark-circle-outline','checkmark-circle-outline','remove-circle','checkmark-circle-outline']

 for (let i = 0; i < 4; i++) {
      this.items.push({
         day:this.day[i],
         detail:this.detail[i],
        badge_c:this.badge_c[i],
        badge_i:this.badge_i[i],
        icon:this.icon[i]
      })
  }
}
}