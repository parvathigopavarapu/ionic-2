import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MobileRegPage2 } from "../index";
import { LoadingPage, RestaurantmenuPage } from "../../login/index";

@Component({
  selector: 'mobile-reg3',
  templateUrl: 'mobilereg3.html'
})
export class MobileRegPage3 {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotopreviouspage(){
  this.navCtrl.push(MobileRegPage2,{animate: true,direction: 'forward',animation: 'ios-transition'})
 }
  movetosigninpage(){
   this.navCtrl.push(LoadingPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
 }
  homepage(){
    this.navCtrl.setRoot(RestaurantmenuPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
}
