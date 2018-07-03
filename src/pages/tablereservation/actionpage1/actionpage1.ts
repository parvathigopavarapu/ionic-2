import { Component } from '@angular/core';
import { NavController,NavParams,ModalController} from 'ionic-angular';
import { TableCollectionsPage, ActionPage2 } from "../index";

@Component({
    selector: 'page-table',
    templateUrl: 'actionpage1.html'
})
export class ActionPage1 {
    item=[];

    constructor(public navCtrl: NavController,public NavParams:NavParams,public modalCtrl:ModalController) {
        this.item = this.NavParams.get('data')
      //  alert(JSON.stringify(this.item))
    }
rejectOrder(){
     // let modal = this.modalCtrl.create(Step1Page, { data: 'Accept Order', badge })
     //    modal.present(); 
}
gotoorderspage(){
  //  this.navCtrl.setRoot(TableCollectionsPage)
}
gotostep2(){
    this.navCtrl.push(ActionPage2)
}
  

}


