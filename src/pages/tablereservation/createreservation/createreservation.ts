import { Component } from '@angular/core';
import { NavController,ViewController,ModalController,NavParams} from 'ionic-angular';
import { SelectSlotPage, TableReservationMainPage } from "../index";
import { ConfirmReservationPage } from "../confirmreservation/confirmreservation";


@Component({
  selector: 'page-create',
  templateUrl: 'createreservation.html'
})
export class CreateReservationPage {
    public event = {
    month: '1990-02-19',
    timeStarts: '15:00 PM',
    timeEnds: '1990-02-20'
  }
data : any;
person:any;
date:any;
time:any;
  constructor(public navCtrl: NavController,public view:ViewController,public modalCtrl:ModalController,public params: NavParams) {
    this.data = this.params.get('time1')
    this.date = this.params.get('date');
    this.person = this.params.get('person');
    this.time = this.params.get('time');

  }
  close(){
 this.view.dismiss();
 //this.navCtrl.push(TableReservationMainPage)
  }
  checkAvailability(){
    //this.navCtrl.push(SelectSlotPage)
   let myModal = this.modalCtrl.create(SelectSlotPage);
    myModal.present();

  }
  confirm(person,date,timing){
      let myModal = this.modalCtrl.create(ConfirmReservationPage,{datax:'confirm2',person,date,timing,animate: true,direction: 'forward',animation: 'ios-transition'});
    myModal.present();
   // this.navCtrl.push(ConfirmReservationPage,{datax:'confirm2',person,date,timing,animate: true,direction: 'forward',animation: 'ios-transition'})

  }
}