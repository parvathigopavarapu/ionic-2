import { Component } from '@angular/core';
import { NavController, NavParams,ViewController,ModalController} from 'ionic-angular';
import { Step2Page } from "../index";


@Component({
  selector: 'page-step1page',
  templateUrl: 'step1page.html'
})
export class Step1Page {
  selectedItem: any;
      badge: any;
         badge1: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public modal:ModalController) {
        this.badge = this.navParams.get('data');
        this.badge1 = this.navParams.get('badge')
      
       
  }
  gotoorderspage(){
    this.viewCtrl.dismiss();
    //alert(JSON.stringify(data))
   // this.navCtrl.push(CollectionsPage, {newItems:data })
   
  }
  gotostep2(item){
  let modal = this.modal.create(Step2Page,{data:item,animate:true,direction: 'forward',animation: 'ios-transition'});
   modal.present();
   // this.navCtrl.setRoot(Step2Page,{data:item})
  }
}