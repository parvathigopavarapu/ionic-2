import { Component } from '@angular/core';
import { NavController,App} from 'ionic-angular';

import { TabsPage } from "../../tabs/tabs";

@Component({
  selector: 'page-modal',
  templateUrl: 'direction.html'
})
export class DirectionPage {
  ;
  constructor(public navCtrl: NavController,public app:App) {

  }
  gotoOrderpage(){
     // this.navCtrl.push(OrdersPage)
     this.app.getRootNav().push(TabsPage,{tabIndex:1},{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
}