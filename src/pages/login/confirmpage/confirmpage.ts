import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../index";


@Component({
  selector: 'page-confirm',
  templateUrl: 'confirmpage.html'
})
export class ConfirmPage {

  constructor(public navCtrl: NavController) { }
homepage(){
    this.navCtrl.push(LoginPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
}
}