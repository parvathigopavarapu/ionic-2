import { Component } from '@angular/core';
import { NavController,App,NavParams } from 'ionic-angular';
//import { BookingsSubPage } from "../index";
import { TabsPage } from "../../tabs/tabs";

@Component({
  selector: 'tab-bookings',
  templateUrl: 'bookingsmain.html'
})
export class BookingsPage {
  items = []
  item = []
  name=[];

  constructor(public navCtrl: NavController,public app:App,public param:NavParams) {
      this.name = param.data;
    this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    this.item = [];

    for (let i = 0; i < 15; i++) {
      this.item.push({
        items: this.items[i]
      })
      //

    }

  }
  gotoBookingsPage() {
    //this.navCtrl.push(BookingsSubPage)
    this.app.getRootNav().push(TabsPage, {tabIndex: 1},{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  gotohomepage(){
    this.app.getRootNav().push(TabsPage, {tabIndex: 0},{animate: true,direction: 'forward',animation: 'ios-transition'})
  }


}
