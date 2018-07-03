import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PassWordPage3 } from "../index";
import { LoginPage } from "../../login/index";

@Component({
  selector: 'page-password4',
  templateUrl: 'pwpage4.html'
})
export class PassWordPage4 {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  movetosigninpage(){
      this.navCtrl.push(LoginPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  gotonextpage(){
   // this.navCtrl.push(PassWordPage2)
  }
  gotopreviouspage(){
       this.navCtrl.push(PassWordPage3,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  signuppage(){
     this.navCtrl.push(LoginPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }

}
