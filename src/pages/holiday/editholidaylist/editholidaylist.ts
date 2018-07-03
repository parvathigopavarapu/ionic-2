import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ViewController} from 'ionic-angular';
import { HolidayPage } from "../index";
//import { HolidayPage } from "../holidaylist/holidaylist";


@Component({
  selector: 'page-holidayedit',
  templateUrl: 'editholidaylist.html'
})
export class HolidayEditPage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController,public view: ViewController) {}
 
}