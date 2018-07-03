import { Component } from '@angular/core';
import { NavController,NavParams,ModalController} from 'ionic-angular';
import { ActionPage1 } from "../actionpage1/actionpage1";

@Component({
    selector: 'page-table',
    templateUrl: 'tablecollections.html'
})
export class TableCollectionsPage {
    item=[];

    constructor(public navCtrl: NavController,public NavParams:NavParams,public modalCtrl:ModalController) {
        this.item = this.NavParams.get('data')
      //  alert(JSON.stringify(this.item))
    }
rejectOrder(item){
     let modal = this.modalCtrl.create(ActionPage1,{data:item})
     modal.present(); 
}
  

}


