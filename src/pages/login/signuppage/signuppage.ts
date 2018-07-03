import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage,  ConfirmPage } from "../index";

@Component({
  selector: 'page-signup',
  templateUrl: 'signuppage.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) { }

  signin() {
    this.navCtrl.push(LoginPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  signup() {
       this.navCtrl.push(ConfirmPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
}