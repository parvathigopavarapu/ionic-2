import { Component } from '@angular/core';
import { NavController,NavParams}from 'ionic-angular';
import { RestaurantmenuPage12, MenuManagementPage } from "../index";
import { TabsPage } from "../../tabs/tabs";

@Component({
  selector: 'page-createmenu',
  templateUrl: 'createmenu.html'
})
export class CreateMenuPage {
 edit:any;
 list:boolean = true;
  constructor(public navCtrl: NavController,public param:NavParams) {

this.edit = this.param.get('data')

  }

  restaurantlist(){
      this.navCtrl.push(RestaurantmenuPage12);
  }
  
  cancelpage(){
    this.navCtrl.pop(TabsPage)
  }
}