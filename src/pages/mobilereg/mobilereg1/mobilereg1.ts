import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MobileRegPage2 } from "../index";
import { LoadingPage } from "../../login/index";


@Component({
  selector: 'mobile-reg',
  templateUrl: 'mobilereg1.html'
})
export class MobileRegPage1 {
  selectedItem: any;
  country: any;
 code: any;
  select: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.country = ['india', 'Us', 'UK', 'Afghanistan', 'Albania'];
    
    
    this.select = [];
    for (let i = 0; i < 5; i++) {
      this.select.push({
        country: this.country[i],
        code: this.code[i]
      })
    }
  }
  gotonextpage() {
    this.navCtrl.push(MobileRegPage2,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  gotopreviouspage() {
    this.navCtrl.push(LoadingPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  movetosigninpage() {
    this.navCtrl.push(LoadingPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }

}
