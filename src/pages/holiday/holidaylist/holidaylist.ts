import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ViewController} from 'ionic-angular';
import { HolidayEditPage } from "../index";


@Component({
  selector: 'page-holiday',
  templateUrl: 'holidaylist.html'
})
export class HolidayPage {
  items = [];
  start = [];
  end = [];
  name = [];
  icon: any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController,public view: ViewController) {
    this.name = ['Sankranti', 'Republic Day', 'Shivaratri', 'Good Friday', 'Independence day', 'Gandhi Jayanti', 'Deevali'];
    this.start = ['15-01-2017', '26-01-2017', '21-02-2017', '05-03-2017', '19-04-2017', '02-10-2017', '03-11-2017'];
    this.end = ['15-01-2017', '26-01-2017', '21-02-2017', '05-03-2017', '19-04-2017', '02-10-2017', '03-11-2017']
    this.icon = ['checkmark','checkmark','checkmark','close','close','close','checkmark']

    for (let i = 0; i < 7; i++) {
      this.items.push({
        name: this.name[i],
        start: this.start[i],
        end: this.end[i],
        icon: this.icon[i]
      });
    }
    
  }
  goback(){
      //this.navCtrl.push(AboutUsPage)
      this.view.dismiss();    
  }
  deleteFields(item){
    for(let i = 0; i < this.items.length; i++) {
 
      if (this.items[i] == item) {
        this.items.splice(i, 1);
      }
    }
  }
  editfields(item){
    this.navCtrl.push(HolidayEditPage)
  }
}