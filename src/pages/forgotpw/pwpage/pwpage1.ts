import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PassWordPage2 } from "../index";
import { LoginPage } from "../../login/index";

@Component({
  selector: 'page-password',
  templateUrl: 'pwpage1.html'
})
export class PassWordPage {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  movetosigninpage(){
    this.navCtrl.push(LoginPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  gotonextpage(){
    this.navCtrl.push(PassWordPage2,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  gotoPreviousPage(){
    this.navCtrl.push(LoginPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
}
