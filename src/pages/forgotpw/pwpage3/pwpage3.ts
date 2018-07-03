import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PassWordPage2, PassWordPage4 } from "../index";
import { LoginPage } from "../../login/index";
//import { PassWordPage2 } from "../index";

@Component({
  selector: 'page-password3',
  templateUrl: 'pwpage3.html'
})
export class PassWordPage3 {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  movetosigninpage(){
      this.navCtrl.push(LoginPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  gotonextpage(){
    this.navCtrl.push(PassWordPage4,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  gotopreviouspage(){
       this.navCtrl.push(PassWordPage2,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
}
