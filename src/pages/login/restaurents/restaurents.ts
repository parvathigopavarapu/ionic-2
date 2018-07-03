import { Component } from '@angular/core';
import { NavController,ViewController} from 'ionic-angular';
import { TabsPage } from "../../tabs/tabs";



@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurents.html'
})
export class RestaurantmenuPage {
    [x: string]: any;
    name = []
    address = []
    items = []
    constructor(public navCtrl: NavController,public viewCtrl: ViewController) {
      this.name = ['Daksina Grand','Udupi Grand','Janapriya','Asoka','Pie','APM']
      this.address=['9632145698, Kumarswami layout, Bangalore','8885552362, Jp Nagar, Bangalore','7896541236, JB Nagar, Bangalore','6325987455, BSK, Bangalore','99966654235, RR Nagar, Bangalore',
     '8885552362, KR Puram, Bangalore']
        for(let i = 0; i < 6; i++){
            this.items.push({
                name:this.name[i],
                address:this.address[i]
            })
        }
    }

gotoHomepage(item){
    alert(item.name)
    this.navCtrl.push(TabsPage, {tabIndex:0,restaurant_name: item.name},{animate: true,direction: 'forward',animation: 'ios-transition'})
    //this.navCtrl.push(TabsPage)
}
 close() {
    this.viewCtrl.dismiss();
  }
}