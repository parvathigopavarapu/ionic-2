import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MobileRegPage3, MobileRegPage1 } from "../index";
import { LoadingPage } from "../../login/index";


@Component({
  selector: 'mobile-reg2',
  templateUrl: 'mobilereg2.html'
})
export class MobileRegPage2 {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
 gotonextpage(){
   this.navCtrl.push(MobileRegPage3,{animate: true,direction: 'forward',animation: 'ios-transition'})
 }
 gotopreviouspage(){
  this.navCtrl.push(MobileRegPage1,{animate: true,direction: 'forward',animation: 'ios-transition'})
 }
  movetosigninpage(){
   this.navCtrl.push(LoadingPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
 }
}
