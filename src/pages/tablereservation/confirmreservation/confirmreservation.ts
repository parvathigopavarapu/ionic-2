import { Component } from '@angular/core';
import { NavController,ViewController ,NavParams,ModalController} from 'ionic-angular';
import { SelectSlotPage, CreateReservationPage, TableReservationMainPage } from "../index";


@Component({
  selector: 'page-confirm',
  templateUrl: 'confirmreservation.html'
})
export class ConfirmReservationPage {
  [x: string]: any;
  data1: any;
   slot:any;
     public event = {
    month: '1990-02-19',
    timeStarts: '15:00 PM',
    timeEnds: '1990-02-20'
  }
date:any;
time:any;
person:any;
  create:any;
datax:any;
date2:any;

  constructor(public navCtrl: NavController,public view:ViewController,public param:NavParams,public modalCtrl:ModalController) {
 this.create = this.param.get('create')
this.data1 = this.param.get('data');
this.person = this.param.get('person');
this.time = this.param.get('timing');
this.datax =this.param.get('datax')


  }

   
  confirm(timing,person){

 let myModal = this.modalCtrl.create(ConfirmReservationPage,{timing,person,data:'confirm',animate: true,direction: 'forward',animation: 'ios-transition'});
   this.data =  myModal.present();
  // this.navCtrl.push(ConfirmReservationPage,{data:'confirm',animate: true,direction: 'forward',animation: 'ios-transition'})
  }
  close(){
    this.view.dismiss();
  }
  select(){
 // this.navCtrl.push(SelectSlotPage)
  let myModal = this.modalCtrl.create(SelectSlotPage);
  myModal.present();
   
 
  }
  gotoCreatePage(person,time){
    
    let myModal = this.modalCtrl.create(CreateReservationPage,{time1:'time',person,time});
    myModal.present();
  }
  gotoReservationList()
  {
    this.navCtrl.push(TableReservationMainPage);
  }
}