import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../../tabs/tabs";


@Component({
  selector: 'page-step2page',
  templateUrl: 'step2page.html'
})
export class Step2Page {
  selectedItem: any;
      badge: any;
     
  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.badge = this.navParams.get('data');
  }
  close()
  {
    this.navCtrl.push(TabsPage,{tabIndex:1},{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
}