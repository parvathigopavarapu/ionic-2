import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeliveryzoneEditPage } from "../index";


@Component({
  selector: 'page-zone',
  templateUrl: 'deliveryzone.html'
})
export class DeliveryzonePage {
items = [];
place = [];
zone= [];
cov= [];
max= [];
del= [];
free=[];
  constructor(public navCtrl: NavController) {
this.place = ['Bsk','jp','Jy','Mej','Jm',"sn"];
this.zone= ['Z1','Z2','Z3','Z4','Z5','Z6'];
this.cov=['3','4','5','6','7','10'];
this.max=['$10','$20','$30','$40','$50','$60'];
this.del=['$10','$20','$30','$40','$50','$60'];
this.free=['$10','$20','$30','$40','$50','$60'];
  

  for (let i = 0; i < 6; i++) {
      this.items.push({
        place: this.place[i],
        zone: this.zone[i],
        cov:this.cov[i],
        max:this.max[i],
        del:this.del[i],
        free:this.free[i]
      });
    }
}
editfields(item){
  this.navCtrl.push(DeliveryzoneEditPage)
}
}