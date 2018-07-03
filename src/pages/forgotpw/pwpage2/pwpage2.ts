import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PassWordPage, PassWordPage3 } from "../index";
import { LoginPage } from "../../login/index";

@Component({
  selector: 'page-password2',
  templateUrl: 'pwpage2.html'
})
export class PassWordPage2 {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  movetosigninpage(){
      this.navCtrl.push(LoginPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  gotopreviouspage(){
      this.navCtrl.push(PassWordPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  gotonextpage(){
      this.navCtrl.push(PassWordPage3,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
}
