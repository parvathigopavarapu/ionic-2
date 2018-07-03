import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage, SignupPage } from "../index";

@Component({
  selector: 'page-startpage',
  templateUrl: 'startpage.html'
})
export class StartPage {
 
  constructor(public navCtrl: NavController) {

  }
  loginpage()
  {
      this.navCtrl.push(LoginPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  signuppage()
  {
      this.navCtrl.push(SignupPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
  }
}