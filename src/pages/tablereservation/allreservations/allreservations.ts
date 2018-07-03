import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ViewController} from 'ionic-angular';
import { TableCollectionsPage } from "../index";



@Component({
  selector: 'page-reservation',
  templateUrl: 'allreservations.html'
})
export class ReservationListPage {
 name =[];
 phone = [];
 date:any;
 email:any;
time:any;
num:any;
item=[];
data = []
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController,public view: ViewController) {
      this.name = ['asha','parvathi','madhu','rani','shivani'];
      this.item = this.navParams.get('newItem')

      this.phone = ['9632569874','7458963215','8885556662','7893214569','7896589652'];
      this.email = ['asha@stalenhoop.com','paru@stalenhoop.com','madhu@stalenhoop.com','rani@stalenhoop.com','shivani@stalenhoop.com'];
      this.time = ['08:30pm','07:30pm','09:30pm','6.30pm','10.30pm'];
      this.date = ['25-02-2017','14-03-2017','09-06-2017','12-08-2017','18-08-2017','03-09-2017'];
      this.num = ['5','6','10','8','4']
      for(let i = 0;i<5;i++){
          this.data.push({
              name:this.name[i],
              phone:this.phone[i],
              email:this.email[i],
              time:this.time[i],
              date:this.date[i],
              num:this.num[i]
                  })
      }
      
  }
  gotocollectionspage(item){
    //  this.navCtrl.push(TableCollectionsPage,{data:item})
  }
  
}