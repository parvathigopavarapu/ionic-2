import { Component } from '@angular/core';
import { NavController,NavParams,ViewController } from 'ionic-angular';
import { OpeningHoursPage } from "../index";

@Component({
    selector: 'page-editopeninghours',
    templateUrl: 'openinghoursedit.html'
})
export class OpeningHoursEditPage {
    badge=[];
    constructor(public navCtrl: NavController,public navParams:NavParams,public view:ViewController) {
        this.badge = this.navParams.get('item');
       // alert(JSON.stringify(this.badge))
    }
    update(day,open,close){
          this.navCtrl.setRoot(OpeningHoursPage,{day,open,close},{animate: true,direction: 'forward',animation: 'ios-transition'})
          //this.view.dismiss();
    }
    dismiss(day1,open1,close1){
       // this.view.dismiss(day1,open1);
        this.navCtrl.setRoot(OpeningHoursPage,{day1,open1,close1},{animate: true,direction: 'forward',animation: 'ios-transition'})
    }
   // cancel(day1,open1,close1){

  //  }
    
}