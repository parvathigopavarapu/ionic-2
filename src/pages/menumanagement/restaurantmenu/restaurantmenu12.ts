import { Component ,Directive, ElementRef, Renderer, Input } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController, App, ViewController } from 'ionic-angular';

import { TabsPage } from "../../tabs/tabs";
import { HomePage } from "../../homemain/index";
import { MenuManagementPage, CreateMenuPage } from "../index";

@Component({
  selector: 'page-restaurantmenu',
  templateUrl: 'restaurantmenu12.html',

})
export class RestaurantmenuPage12 {
   shouldAnimate: boolean = true;
  day: any;
  detail: any;
  badge_c: any;
  badge_i: any;
  icon: any;
  items = [];
  
  element: any;
  //shouldAnimate:any;

  constructor(public navCtrl: NavController, public params: NavParams, private el:ElementRef, private renderer:Renderer) {
   // this.shouldAnimate=true;
    this.day = ['Day Menu', 'Evening Menu', 'Delivery Menu', 'Online Menu'];
    this.detail = ['Here is a sample lunch for a restaurant', 'Here is a delicious snacks for a restaurant', 'We will deliver food to people`s homes', 'Here is a delocious snacks menu for a restaurant']
    this.badge_c = [5, 6, 7, 8]
    this.badge_i = [30, 45, 54, 23]
    // this.icon = ['checkmark-circle-outline','checkmark-circle-outline','remove-circle','checkmark-circle-outline']
    this.icon = ['true', 'false', 'true', 'false']
    for (let i = 0; i < 4; i++) {
      this.items.push({
        day: this.day[i],
        detail: this.detail[i],
        badge_c: this.badge_c[i],
        badge_i: this.badge_i[i],
        icon: this.icon[i]
      })
    }
    alert("hello" + this.shouldAnimate)
  }

  manage(item) {
    this.navCtrl.push(MenuManagementPage, { item });
  }
  edit(item) {
    this.navCtrl.push(CreateMenuPage, { data: 'edit' })
  }
  createmenu() {
    this.navCtrl.push(CreateMenuPage)
  }
}