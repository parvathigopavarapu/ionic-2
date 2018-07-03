import { Component, ViewChild, Input, ElementRef, Renderer } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { OpeningHoursEditPage } from "../index";
import { TabsPage } from "../../tabs/tabs";
import * as _ from "underscore";

@Component({
  selector: 'page-openinghours',
  templateUrl: 'openingHours.html'
})
export class OpeningHoursPage {
  item: any;
  _renderer: any;
  items = [];
  days = [];
  open = [];
  close = [];
  day = [];
  open1 = [];
  close1 = [];
  day2 = [];
  open2 = [];
  close2 = [];
  editing: boolean = false;





  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.open = ['6:00am', '7:00am', '8:00am', '8:30am', '9:00am', '6:30am', '5am:00'];
    this.close = ['6:00pm', '7:00pm', '8:00pm', '8:30pm', '9:00pm', '6:30pm', '7pm:00']

    for (let i = 0; i < 7; i++) {
      this.items.push({
        days: this.days[i],
        open: this.open[i],
        close: this.close[i],

      });

    }
    this.day = this.navParams.get('day');
    this.open1 = this.navParams.get('open');
    this.close1 = this.navParams.get('close');

    this.day2 = this.navParams.get('day1');
    this.open2 = this.navParams.get('open1');
    this.close2 = this.navParams.get('close1');


  }
  editfields(item) {
   //let modal = this.modalCtrl.create(OpeningHoursEditPage, { item })
   //modal.present(); 
   this.navCtrl.setRoot(OpeningHoursEditPage, {item,animate: true,direction: 'forward',animation: 'ios-transition'})
 
   // }



}
   goback(){
     this.navCtrl.setRoot(TabsPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
    //this.navCtrl.pop(TabsPage, {tabIndex:0})
   }



 /* edit(days, editing, index) {
    days = this.days[1]
   this.editing = true;
    return ;
  }
  save(days, editing) {
    this.editing = false;
    return ;
  }
*/
}