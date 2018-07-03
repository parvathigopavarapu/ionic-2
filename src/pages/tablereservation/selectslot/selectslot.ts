import { Component } from '@angular/core';
import { NavController,ViewController ,NavParams,ModalController} from 'ionic-angular';
import { CreateReservationPage } from "../index";
import { ConfirmReservationPage } from "../confirmreservation/confirmreservation";


@Component({
  selector: 'page-slot',
  templateUrl: 'selectslot.html'
})
export class SelectSlotPage {
  options:any;
  time:any;
  person:any;
  public event = {
    month: '1990-02-19',
    timeStarts: '15:00 PM',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController,public view:ViewController,public param:NavParams,public modalCtrl:ModalController) {
    this.options = [ 1,2,3,4,5,6,7,8,9,10];

  }

  update(person,date,timing){
  
    //this.navCtrl.push(ConfirmReservationPage,{create: 'create',time:'time',person:person,date:date,timing:timing})
    let myModal = this.modalCtrl.create(ConfirmReservationPage,{create: 'create',time:'time',person:person,date:date,timing:timing});
    myModal.present();
   
  }

  close(person,date,timing){
    this.view.dismiss();
 
  }
}