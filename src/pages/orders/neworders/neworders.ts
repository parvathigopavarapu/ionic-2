import { Component } from '@angular/core';
import { NavController, NavParams,App} from 'ionic-angular';
import { CollectionsPage } from '../collections/collections';
import { TabsPage } from "../../tabs/tabs";
import { OrdersPage } from "../index";

//import { OrdersPage } from "../index";
@Component({
  selector: 'page-neworders',
  templateUrl: 'neworders.html'
})
export class NewOrdersPage {
  // items: Array<{ item: string, badge: number }>;
  items =[];
  order =[];
  dates:string[];
  phone:string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
   this.items = this.navParams.get('newItem');
 
  this.dates=['2015-3-21','2017-4-21','2001-5-23','2000-6-29','1994-1-1'];
  this.phone =['9542037170','34555678921','4324543543565','45345344365','325435434']
   for (let i = 0; i < 5; i++) {
      this.order.push({
        dates: this.dates[i],
        phone: this.phone[i]
      });
    }
    
  }
   itemTapped(orders,items) {
    // alert(JSON.stringify(items))
    this.navCtrl.push(CollectionsPage, { newItem: orders, newItems:items },{animate: true,direction: 'forward',animation: 'ios-transition'})
    
  }
  gotohomepage(){
     // alert("hello")
   this.app.getRootNav().push(TabsPage,{tabIndex: 1},{animate: true,direction: 'forward',animation: 'ios-transition'})
  
  }

gotoOrderpage()
{
  this.app.getRootNav().push(OrdersPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
}
}
